import React from "react";
import { CardIcon } from "./ui/CardIcon";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { Card } from "./ui/Card1";
import ConnectButton from "./ui/ConnectButton";

const OurServices = () => {
  return (
    <div className="py-20">
      <h1 className="heading">Our Services</h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto px-8">
        <Card
          title="Website Development"
          des="Web development is the process of creating websites and web applications. It includes front-end development (UI/UX using HTML, CSS, JavaScript), back-end development (server, database using Node.js, Python, PHP, etc.), and full-stack development (both front-end & back-end). Web developers use frameworks like React, Angular, Django, and Express.js to build responsive and dynamic websites. The key components of web development include web design, databases, APIs, and security measures to ensure a smooth user experience."
          icon={<CardIcon BtnName={"Website Development"} />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Digital Marketing"
          des="Digital marketing refers to the promotion of products, services, or brands using online channels such as search engines, social media, email, websites, and digital ads. It includes strategies like SEO (Search Engine Optimization), SEM (Search Engine Marketing), content marketing, social media marketing, email marketing, and PPC (Pay-Per-Click) advertising. Digital marketing helps businesses reach a global audience, track performance in real time, and engage with customers more effectively compared to traditional marketing."
          icon={<CardIcon BtnName={"Digital Marketing"} />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Android Development"
          des="Android development is the process of creating applications for Android-powered devices using programming languages like Java, Kotlin, and Dart (Flutter). It involves designing user interfaces, managing databases, handling APIs, and ensuring app performance. Android apps can be built using Android Studio and frameworks like Flutter and React Native for cross-platform development. Developers use tools like Firebase, Retrofit, and Room DB to enhance functionality. Android apps are distributed via the Google Play Store or other platforms."
          icon={<CardIcon BtnName={"Android Development"} />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      <div className="flex items-center justify-center">
        <ConnectButton btnName="View More" />
      </div>
    </div>
  );
};

export default OurServices;
