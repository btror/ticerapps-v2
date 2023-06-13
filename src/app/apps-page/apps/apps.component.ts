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
}
