/**
 * CMS API Client
 * Fetches content from Strapi CMS
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api';

interface APIResponse<T> {
  data: T;
  meta?: any;
}

/**
 * Generic API fetch function
 */
async function fetchFromCMS<T>(endpoint: string): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    // Single types return data directly, collections have { data: [...] }
    // Check if result has a 'data' property (collection type)
    if (result && typeof result === 'object' && 'data' in result) {
      return result.data;
    }

    // Single types return the data directly
    return result as T;
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Fetch all CMS data (assembled from multiple endpoints)
 */
export async function fetchAllCMSData() {
  try {
    const [settings, hero, about, services, clients, contact, pages, homePage, pageLabels, notFound] = await Promise.all([
      fetchFromCMS<any>('/global-settings'),
      fetchFromCMS<any>('/heroes'),
      fetchFromCMS<any>('/abouts'),
      fetchFromCMS<any[]>('/services'),
      fetchFromCMS<any[]>('/clients'),
      fetchFromCMS<any>('/contacts'),
      fetchFromCMS<any[]>('/pages'),
      fetchFromCMS<any>('/home-page'),
      fetchFromCMS<any>('/page-labels'),
      fetchFromCMS<any>('/not-found'),
    ]);

    // Transform API data to match labels.json structure
    const transformedData = {
      brand: settings?.brand || {},
      navbar: settings?.navbar || {},
      footer: settings?.footer || {},
      hero: hero || {},
      about: about || {},
      services: {
        sectionLabel: pageLabels?.services?.sectionLabel || 'Our Services',
        heading: pageLabels?.services?.heading || 'COMPREHENSIVE INDUSTRIAL SOLUTIONS',
        description: pageLabels?.services?.description || 'From oil & gas to renewable energy, we provide end-to-end solutions that drive industrial progress and sustainability.',
        list: services?.map(service => ({
          id: service.serviceId,
          icon: service.icon,
          title: service.title,
          description: service.description,
          image: service.image,
          categories: service.categories,
        })) || [],
      },
      clients: {
        heading: pageLabels?.clients?.heading || 'Trusted by Industry Leaders',
        list: clients || [],
      },
      contact: contact || {},
      pages: pages.reduce((acc, page) => {
        acc[page.pageName] = {
          header: page.header,
          values: page.sections, // Map sections to values for compatibility
          timeline: page.timeline, // Timeline data if exists
          cta: page.cta,
        };
        return acc;
      }, {} as Record<string, any>),
      meta: {
        home: {
          title: homePage?.metaTitle || 'AASKTECHNOLOGIES - Industrial Engineering & Energy Solutions',
          description: homePage?.metaDescription || 'AASKTECHNOLOGIES provides comprehensive industrial solutions in oil & gas, renewable energy, railways, automotives, and engineering consulting. 30+ years of excellence.',
        },
        ...pages.reduce((acc, page) => {
          if (page.metaTitle || page.metaDescription) {
            acc[page.pageName] = {
              title: page.metaTitle,
              description: page.metaDescription,
            };
          }
          return acc;
        }, {} as Record<string, any>),
      },
      home: {
        servicesPreview: homePage?.servicesPreview || {
          label: 'Our Services',
          heading: 'COMPREHENSIVE INDUSTRIAL SOLUTIONS',
          description: 'From oil & gas to renewable energy, we provide end-to-end solutions that drive industrial progress and sustainability.',
          viewAll: 'View All Services',
          learnMore: 'Learn More',
        },
        cta: homePage?.cta || {
          heading: 'READY TO START YOUR PROJECT?',
          description: 'Partner with AASKTECHNOLOGIES for world-class industrial solutions. Our team of experts is ready to bring your vision to life.',
          buttons: {
            quote: 'Get a Quote',
            about: 'Learn About Us',
          },
        },
      },
      notFound: notFound || {
        heading: '404',
        message: 'Oops! Page not found',
        link: 'Return to Home',
      },
      projects: {
        sections: pageLabels?.projects || {
          current: {
            label: 'Active Projects',
            heading: 'CURRENT PROJECTS',
            description: 'Our ongoing projects showcase our commitment to innovation and excellence.',
          },
          upcoming: {
            label: 'Future Pipeline',
            heading: 'UPCOMING WORKS',
            description: 'Exciting projects in planning stages.',
          },
          recent: {
            label: 'Recently Completed',
            heading: 'RECENT PROJECTS',
            description: 'Successfully completed projects from 2021-2023.',
          },
          previous: {
            label: 'Legacy Projects',
            heading: 'PREVIOUS WORKS',
            description: 'Historic projects spanning over two decades.',
          },
        },
      },
    };

    return transformedData;
  } catch (error) {
    console.error('Failed to fetch CMS data:', error);
    throw error;
  }
}

export { fetchFromCMS };
