export enum SelectedPage {
    Home = "home",
    Advantages = "advantages",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }
  
export interface AdvantageType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}