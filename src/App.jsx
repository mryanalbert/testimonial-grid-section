import Card from "./components/Card";
import DanielImg from "./assets/images/image-daniel.jpg";
import JeanetteImg from "./assets/images/image-jeanette.jpg";
import JonathanImg from "./assets/images/image-jonathan.jpg";
import KiraImg from "./assets/images/image-kira.jpg";
import PatrickImg from "./assets/images/image-patrick.jpg";

export default function App() {
  return (
    <div className="wrapper min-h-screen flex items-center px-4 py-14 md:py-0 bg-slate-200">
      <div className="grid md:grid-cols-4 md:grid-row-2 gap-5 md:gap-8 w-full max-w-[1200px] mx-auto">
        <Card
          classValues="md:col-span-2 bg-moderate-violet"
          img={DanielImg}
          author="Daniel Clifford"
          verified={true}
          textColor="text-light-gray"
          borderColor="border-purple-400"
        >
          <h1 className="text-white my-5 text-xl font-medium">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </h1>
          <p className="text-light-gray opacity-75 text-sm font-medium">
            " I was an EMT for many years before I joined the bootcamp. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most gruelling - time of my life. Since
            completing the course, I've been successfully switched careers,
            working as a Software Engineer at a VR startup. "
          </p>
        </Card>
        <Card
          classValues="bg-very-dark-grayish-blue"
          img={JonathanImg}
          author="Jonathan Walters"
          verified={true}
          textColor="text-light-gray"
        >
          <h1 className="text-white my-5 leading-tight text-xl font-medium">
            The team was very supportive and kept me motivated
          </h1>
          <p className="text-light-gray opacity-75 text-sm font-medium">
            " I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. "
          </p>
        </Card>
        <Card
          classValues="md:row-start-2 bg-white"
          img={JeanetteImg}
          author="Jeanette Harmond"
          verified={true}
          textColor="text-very-dark-grayish-blue"
        >
          <h1 className="text-very-dark-grayish-blue my-5 text-xl font-medium">
            An overall wonderful and rewarding experience
          </h1>
          <p className="opacity-75 text-sm text-very-dark-grayish-blue font-medium">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </Card>
        <Card
          classValues="md:row-start-2 md:col-start-2 md:col-span-2 bg-very-dark-blackish-blue"
          img={PatrickImg}
          author="Patrick Abrams"
          verified={true}
          textColor="text-light-gray"
          borderColor="border-purple-400"
        >
          <h1 className="text-white my-5 text-xl font-medium">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h1>
          <p className="text-light-gray opacity-75 text-sm font-medium">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </Card>
        <Card
          classValues="md:col-start-4 md:row-span-2 bg-white"
          img={KiraImg}
          author="Kira Whittle"
          verified={true}
          textColor="text-very-dark-grayish-blue"
        >
          <h1 className="text-very-dark-grayish-blue my-5 text-xl font-medium">
            Such a life-changing experience. Highly recommended!
          </h1>
          <p className="text-very-dark-grayish-blue opacity-75 text-sm font-medium">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </Card>
      </div>
    </div>
  );
}
