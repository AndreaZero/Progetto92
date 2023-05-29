import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import logo from "../data/images/logo.png";
import teamwork from "../data/images/teamwork.jpg";

export function Home() {


  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://i.postimg.cc/Jnq9QwFv/bg1.png')] bg-norepeat bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >

                Pro92

              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Costituita da un team di professionisti con esperienza decennale,<br></br>
la nostra missione è offrire un servizio completo. Dalle pratiche urabanistiche a quelle catastali dalla sicurezza sul lavoro all'efficientamento energetico. 
<br></br><br></br>Scarica il nostro Catalogo dalla sezione servizi.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Perche scegliere noi:
              
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Guidati dal nostro profondo impegno verso la riuscita del progetto, Pro92 è un unico punto di contatto per rispondere ad ogni vostra richiesta. Siamo pronti a trasformare la vostra visione in realtà.

                <br />
                <br />
                Pro92 va oltre il comune concetto di servizio, per noi l'opportunità è poter trasformare la vostra richiesta in una realtà tangibile.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src={teamwork}
                    className="h-full w-full"
                    style={{
                      objectFit: 'contain',
                      borderRadius: '0.4rem'
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Cosa facciamo per te
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Pro92 offre servizi per pratiche urbanistiche e catastali, sicurezza sul lavoro, ristrutturazioni edilizie, valorizzazioni e due diligence immobiliari, perizie, e studi di fattibilità ecc.. Consulta il Catalogo per scoprire tutti i nostri servizi.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Le persone dietro Pro92">
          Incontra il cuore del progetto.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
  {teamData.map(({ img, name, position, socials }) => (
    <div       style={{boxShadow: '0px 1px 10px 0px black'}} >
    <TeamCard
      key={name}
      img={img}
      name={name}
      position={position}
      socials={
        <div className="flex items-center gap-2">
          {socials.map(({ color, name, url }) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <IconButton key={name} color={color} variant="text">
                <i className={`fa-brands text-lg fa-${name}`} />
              </IconButton>
            </a>
          ))}
        </div>
      }
    />
    </div>
  ))}
</div>

        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
  <div className="container mx-auto">
    <PageTitle heading="Vuoi essere contattato?">
      Completa il form e richiedi informazioni!
    </PageTitle>
    <form className="mx-auto mt-12 max-w-3xl text-center" action="https://formspree.io/f/xrgvvoqr" method="POST">
      <div className="mb-8 flex gap-8">
        <Input variant="standard" size="lg" label="Il tuo nome" name="name" />
        <Input variant="standard" size="lg" label="Email" name="_replyto" />
      </div>
      <Textarea variant="standard" size="lg" label="Messaggio" rows={8} name="message" />
      <Button type="submit" variant="gradient" size="lg" className="mt-8">
        Invia messaggio
      </Button>
    </form>
  </div>
</section>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
