import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-page";
import { redirect } from "next/navigation";


const OnboardingPage = async() => {
const {isOnboarded} = await getUserOnboardingStatus();

if(isOnboarded){
    redirect("/dashboard");
}
  return <main>
    <OnboardingForm industries={industries}/>
  </main>;
  };

export default OnboardingPage;