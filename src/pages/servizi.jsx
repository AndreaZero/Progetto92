import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import work from "../data/images/work.gif"

export function Servizi() {
  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      
      <div className="container mx-auto p-4">
        
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
        <center>


          <button style={{borderRadius: '0.3rem', boxShadow: '1px 1px 10px 1px black', fontFamily: 'sans-serif', width: '300px', backgroundColor: 'gold', fontSize: '30px'}}>
            Download Brochure
          </button>
    <div style={{width: '300px', objectFit: 'contain'}}>
      <img src={work} alt='work'></img>
    </div>
    </center>
        </Card>
        
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default Servizi;
