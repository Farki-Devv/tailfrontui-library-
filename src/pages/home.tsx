import { CiLocationOn } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/homeavatar.png';
import { Alert } from '../components/alert';
import { Badge } from '../components/badge';
import { Button } from '../components/button';
import { Card } from '../components/card';
function Home() {
  const router = useNavigate();
  return (
    <div className="mt-16 flex flex-col gap-16">
      <div className="flex flex-col gap-6 items-start">
        <div className="px-2 py-1 border border-accent-800 rounded-lg text-xs text-accent-800">
          ★ 1.3k stars on Github
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-5xl text-type-950 font-semibold">
            Start Building with Tailfront
          </span>
          <span className="text-lg font-normal">
            A collection of pre-designed components to accelerate your web
            development. Simple, <br /> flexible, and customizable for your next
            project. Build with ease and focus on your design.
          </span>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => router('/docs')}>Get Started</Button>
          <Button variant={'outline'} className="tracking-wide">
            <FiGithub className="text-type-500" />
            GitHub
          </Button>
        </div>
      </div>
      <div className="flex max-lg:flex-col gap-5 items-start">
        <Card className="max-w-[540px] p-6 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-xl font-medium">Delete Item?</span>
            <span className="text-sm text-type-500">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </span>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant={'outline'}>No, Keep It</Button>
            <Button variant={'destructive'}>Yes, Delete</Button>
          </div>
        </Card>
        <Alert className="max-w-[40rem] flex gap-3 p-6">
          <img src={logo} alt="" className="size-12" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-base text-type-950">Farrukh Ganiboev</span>
              <span className="text-type-500 text-sm">
                Passionate designer with 5+ years of experience in creating
                intuitive, user-friendly interfaces. Loves blending aesthetics
                with functionality.
              </span>
            </div>
            <span className="flex gap-1 items-center text-xs text-type-400">
              <CiLocationOn className="size-4" />
              New York, USA
            </span>
            <div className="flex flex-wrap gap-1">
              <Badge className="bg-accent-50 text-accent-800">UI Design</Badge>
              <Badge className="bg-accent-50 text-accent-800">
                UX Research
              </Badge>
              <Badge className="bg-accent-50 text-accent-800">
                Prototyping
              </Badge>
              <Badge className="bg-accent-50 text-accent-800">Framer</Badge>
              <Badge className="bg-accent-50 text-accent-800">Figma</Badge>
            </div>
          </div>
        </Alert>
      </div>
    </div>
  );
}

export default Home;
