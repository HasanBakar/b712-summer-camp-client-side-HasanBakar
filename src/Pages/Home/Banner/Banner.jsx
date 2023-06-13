import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/*
https://i.ibb.co/sQZ6PMT/slide1.png
https://i.ibb.co/HVq4GCM/slide2.jpg
https://i.ibb.co/WKqQfGn/slide3.jpg
https://i.ibb.co/CzSwQYc/slide4.webp
https://i.ibb.co/BGThWq4/slide5.jpg
https://i.ibb.co/JcqnvsK/slide6.jpg
 */


const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://i.ibb.co/CzSwQYc/slide4.webp" />
        <p className="legend">
          Ballroom: A partner dance style performed in social settings or
          competitions. It includes dances like Waltz, Foxtrot, Tango, Rumba,
          Cha-Cha, and Samba, each with its characteristic steps and music.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/sQZ6PMT/slide1.png" />
        <p className="legend">
          Ballet is a classical dance form that combines precise and graceful
          movements with classical music, emphasizing technique, flexibility,
          and the art of storytelling through dance.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/HVq4GCM/slide2.jpg" />
        <p className="legend">
          Contemporary: A fluid and expressive dance style that combines
          elements of ballet, modern dance, and jazz. It emphasizes creativity,
          versatility, and personal interpretation.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/WKqQfGn/slide3.jpg" />
        <p className="legend">
          Salsa: A vibrant and energetic social dance style originating from
          Latin America. It combines elements of Afro-Cuban dances with
          influences from jazz and other dance forms.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/BGThWq4/slide5.jpg" />
        <p className="legend">
          Flamenco: A traditional Spanish dance form known for its passionate
          and expressive movements. It incorporates footwork, hand clapping,
          guitar playing, and singing.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/JcqnvsK/slide6.jpg" />
        <p className="legend">
          Tap: A dance form in which dancers use their feet to create rhythmic
          patterns and beats. Metal taps on the shoes produce distinct sounds,
          adding a percussive element to the dance.
        </p>
      </div>
    </Carousel>
  );
};

export default Banner;
