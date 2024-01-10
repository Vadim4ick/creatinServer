import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksIncludesHover extends Schema.Component {
  collectionName: 'components_blocks_includes_hovers';
  info: {
    displayName: 'includesHover';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
    list: Attribute.RichText;
  };
}

export interface ComponentsComplexComponent extends Schema.Component {
  collectionName: 'components_components_complex_components';
  info: {
    displayName: 'ComplexComponent';
    description: '';
  };
  attributes: {
    offers: Attribute.Relation<
      'components.complex-component',
      'oneToMany',
      'api::complex.complex'
    >;
    name: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    img: Attribute.Media;
  };
}

export interface ComponentsHomeBanner extends Schema.Component {
  collectionName: 'components_components_home_banners';
  info: {
    displayName: 'HomeBanner';
    description: '';
  };
  attributes: {
    IntroCard: Attribute.Component<'elements.intro-card', true> &
      Attribute.SetMinMax<{
        max: 3;
      }>;
    banner: Attribute.Media;
    bannerMobile: Attribute.Media;
    bannerMasks: Attribute.Media;
  };
}

export interface ComponentsOfferComponent extends Schema.Component {
  collectionName: 'components_components_offer_components';
  info: {
    displayName: 'OfferComponent';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    offers: Attribute.Relation<
      'components.offer-component',
      'oneToMany',
      'api::offer.offer'
    >;
  };
}

export interface ComponentsSliderCase extends Schema.Component {
  collectionName: 'components_components_slider_cases';
  info: {
    displayName: 'SliderCase';
  };
  attributes: {
    cases: Attribute.Relation<
      'components.slider-case',
      'oneToMany',
      'api::case.case'
    >;
  };
}

export interface ComponentsTextBlock extends Schema.Component {
  collectionName: 'components_components_text_blocks';
  info: {
    displayName: 'textBlock';
  };
  attributes: {
    titlle: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
  };
}

export interface ComponentsVacancies extends Schema.Component {
  collectionName: 'components_components_vacancies';
  info: {
    displayName: 'vacancies';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    date: Attribute.String;
    info: Attribute.String;
    vacancies: Attribute.Component<'elements.vacancy', true>;
  };
}

export interface ElementsIncludesContent extends Schema.Component {
  collectionName: 'components_elements_includes_contents';
  info: {
    displayName: 'includesContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface ElementsIntroCard extends Schema.Component {
  collectionName: 'components_elements_intro_cards';
  info: {
    displayName: 'IntroCard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    info: Attribute.String;
    class: Attribute.Enumeration<
      ['folders', 'spiral', '__image--group', 'graph', 'trust', 'achievement']
    >;
  };
}

export interface ElementsOffer extends Schema.Component {
  collectionName: 'components_components_offers';
  info: {
    displayName: 'Offer';
    description: '';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    price: Attribute.Integer & Attribute.Required;
    info: Attribute.Text;
    tag: Attribute.Text;
    number: Attribute.String & Attribute.Required;
    about: Attribute.Text;
    titleList: Attribute.String;
    list: Attribute.RichText;
  };
}

export interface ElementsTitle extends Schema.Component {
  collectionName: 'components_elements_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsVacancy extends Schema.Component {
  collectionName: 'components_elements_vacancies';
  info: {
    displayName: 'vacancy';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    level: Attribute.Enumeration<['middle', 'junior', 'senoir']>;
    descriptionVacancy: Attribute.RichText & Attribute.Required;
    btnLink: Attribute.String;
    telegrammLink: Attribute.String;
  };
}

export interface SectionsAboutSection extends Schema.Component {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    mainTitle: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    aboutTitle: Attribute.String & Attribute.Required;
    aboutDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsFormSend extends Schema.Component {
  collectionName: 'components_sections_form_sends';
  info: {
    displayName: 'FormSend';
    description: '';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.Email;
    number: Attribute.BigInteger;
    description: Attribute.RichText;
  };
}

export interface SectionsPartners extends Schema.Component {
  collectionName: 'components_sections_partners';
  info: {
    displayName: 'Partners';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    icons: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsSectionTitles extends Schema.Component {
  collectionName: 'components_sections_section_titles';
  info: {
    displayName: 'SectionTitles';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    titles: Attribute.Component<'elements.title', true>;
  };
}

export interface SectionsServices extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    service_collections: Attribute.Relation<
      'sections.services',
      'oneToMany',
      'api::service-collection.service-collection'
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.includes-hover': BlocksIncludesHover;
      'components.complex-component': ComponentsComplexComponent;
      'components.footer': ComponentsFooter;
      'components.home-banner': ComponentsHomeBanner;
      'components.offer-component': ComponentsOfferComponent;
      'components.slider-case': ComponentsSliderCase;
      'components.text-block': ComponentsTextBlock;
      'components.vacancies': ComponentsVacancies;
      'elements.includes-content': ElementsIncludesContent;
      'elements.intro-card': ElementsIntroCard;
      'elements.offer': ElementsOffer;
      'elements.title': ElementsTitle;
      'elements.vacancy': ElementsVacancy;
      'sections.about-section': SectionsAboutSection;
      'sections.form-send': SectionsFormSend;
      'sections.partners': SectionsPartners;
      'sections.section-titles': SectionsSectionTitles;
      'sections.services': SectionsServices;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'ui.link': UiLink;
    }
  }
}
