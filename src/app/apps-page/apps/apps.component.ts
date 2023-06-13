import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent {
  appSections = [
    {
      title: "Adam's method",
      description:
        "This mobile app utilizes Adam's apportionment method to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'IOS',
      link: 'https://apps.apple.com/us/app/adams-method/id1603302822',
      iconPath: '../../../assets/ios_adamsmethod.jpg',
      price: '$0.99',
    },
    {
      title: "Hamilton's method",
      description:
        "This mobile app utilizes Hamilton's apportionment method to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'IOS',
      link: 'https://apps.apple.com/us/app/hamiltons-method/id1603178695',
      iconPath: '../../../assets/ios_hamiltonsmethod.jpg',
      price: '$0.99',
    },
    {
      title: "Jefferson's method",
      description:
        "This mobile app utilizes Jefferson's apportionment method to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'IOS',
      link: 'https://apps.apple.com/us/app/jeffersons-method/id1603292202',
      iconPath: '../../../assets/ios_jeffersonsmethod.jpg',
      price: '$0.99',
    },
    {
      title: "Webster's method",
      description:
        "This mobile app utilizes Webster's apportionment method to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'IOS',
      link: 'https://apps.apple.com/us/app/websters-method/id1603298347',
      iconPath: '../../../assets/ios_webstersmethod.png',
      price: '$0.99',
    },
    {
      title: 'Apportionment calculator free',
      description:
        "This mobile app utilizes Adam's, Hamilton's, Webster's, and Jefferson's apportionment methods to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'Google Play',
      link: 'https://play.google.com/store/apps/details?id=com.brandon.apportionmentcalculator&hl=en_US&gl=US',
      iconPath: '../../../assets/gp_apportionmentcalculatorfree.png',
      price: 'FREE',
    },
    {
      title: 'Apportionment calculator pro',
      description:
        "This mobile app utilizes the method of equal proportions as well as Adam's, Hamilton's, Webster's, Jefferson's, Lowndes', and Hungtington Hill's apportionment methods to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'Google Play',
      link: 'https://play.google.com/store/apps/details?id=com.brandon.apportionmentcalculatorpro&hl=en_US&gl=US',
      iconPath: '../../../assets/gp_apportionmentcalculatorpro.jpg',
      price: '$0.99',
    },
    {
      title: 'Apportionment methods',
      description:
        "This mobile app utilizes Adam's, Hamilton's, Webster's, and Jefferson's apportionment methods to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'IOS',
      link: 'https://apps.apple.com/us/app/apportionment-methods/id1603306969',
      iconPath: '../../../assets/ios_apportionmentmethods.jpg',
      price: '$1.99',
    },
    {
      title: 'Length unit converter',
      description:
        "This mobile app provides a convenient and efficient way to convert measurements between metric and imperial units. Simplify your unit conversions with ease, whether it's centimeters to inches, meters to feet, or kilometers to miles.",
      platform: 'Google Play',
      link: 'https://play.google.com/store/apps/details?id=com.brandon.lengthconverter&hl=en_US&gl=US',
      iconPath: '../../../assets/gp_lengthunitconverter.png',
      price: 'FREE',
    },
    {
      title: 'Apportionment calculator',
      description:
        "This desktop app utilizes Adam's, Hamilton's, Webster's, and Jefferson's apportionment methods to facilitate fair and efficient resource allocation and distribution. It applies mathematical calculations based on population size, current allocations, and prioritization criteria to ensure equitable distribution of resources among different entities, departments, or stakeholders. The app streamlines the process, enabling users to allocate resources in a theoretically sound manner, promoting fairness and proportional distribution.",
      platform: 'Desktop',
      link: 'https://github.com/btror/apportionmentCalculatorPy',
      iconPath: '../../../assets/desktop_apportionmentcalculator.png',
      price: 'FREE',
    },
  ];

  sortOptions = [
    { label: 'Title', value: 'sortByTitle' },
    { label: 'Platform', value: 'sortByPlatform' },
    { label: 'Price (Low to High)', value: 'sortByPriceLowToHigh' },
    { label: 'Price (High to Low)', value: 'sortByPriceHighToLow' },
  ];
  selectedSortOption!: string;
  dropdownOpen: boolean = false;

  constructor() {
    this.selectedSortOption = 'sortByTitle';
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectSortOption(option: any) {
    this.selectedSortOption = option.value;
    this.dropdownOpen = false;
    this.sortApps();
  }

  sortApps() {
    switch (this.selectedSortOption) {
      case 'sortByTitle':
        this.sortByTitle();
        break;
      case 'sortByPriceLowToHigh':
        this.sortByPriceLowToHigh();
        break;
      case 'sortByPriceHighToLow':
        this.sortByPriceHighToLow();
        break;
      case 'sortByPlatform':
        this.sortByPlatform();
        break;
      default:
        break;
    }
  }

  sortByTitle() {
    this.appSections.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  sortByPlatform() {
    this.appSections.sort((a, b) => {
      if (a.platform === b.platform) {
        return a.title.localeCompare(b.title);
      } else {
        return a.platform.localeCompare(b.platform);
      }
    });
  }

  sortByPriceLowToHigh() {
    this.appSections.sort((a, b) => {
      if (a.price === 'FREE' && b.price !== 'FREE') {
        return -1;
      } else if (a.price !== 'FREE' && b.price === 'FREE') {
        return 1;
      } else {
        const priceA =
          a.price === 'FREE' ? 0 : parseFloat(a.price.replace('$', ''));
        const priceB =
          b.price === 'FREE' ? 0 : parseFloat(b.price.replace('$', ''));

        if (priceA === priceB) {
          if (a.price === 'FREE') {
            return a.title.localeCompare(b.title);
          } else {
            return a.title.localeCompare(b.title);
          }
        } else {
          return priceA - priceB;
        }
      }
    });
  }

  sortByPriceHighToLow() {
    this.appSections.sort((a, b) => {
      if (a.price === 'FREE' && b.price !== 'FREE') {
        return 1;
      } else if (a.price !== 'FREE' && b.price === 'FREE') {
        return -1;
      } else {
        const priceA =
          a.price === 'FREE' ? 0 : parseFloat(a.price.replace('$', ''));
        const priceB =
          b.price === 'FREE' ? 0 : parseFloat(b.price.replace('$', ''));

        if (priceA === priceB) {
          if (a.price === 'FREE') {
            return a.title.localeCompare(b.title);
          } else {
            return a.title.localeCompare(b.title);
          }
        } else {
          return priceB - priceA;
        }
      }
    });
  }
}
