import React from "react";

interface Person {
  name: string;
  code: string;
}

interface Quote {
  quote: string;
  speaker: Person;
}

const Shravan: Person = {
  name: "Shravan Gharat",
  code: "shravan",
};

const Aruna: Person = {
  name: "Ms. Aruna Khubalkar",
  code: "aruna",
};

const Sunantha: Person = {
  name: "Dr. Sunantha Krishnan",
  code: "sunantha",
};

const Uday: Person = {
  name: "Mr. Uday Nayak",
  code: "uday",
};

const Aparna: Person = {
  name: "Ms. Aparna Telgote",
  code: "aparna",
};

const Tayyab: Person = {
  name: "Mr. Tayyabali Sayyad",
  code: "tayyab",
};

const quotes: Quote[] = [
  {
    quote: "Yed zave ki aulad Hai bc",
    speaker: Shravan,
  },
  {
    quote: `Someone epic mom and elon musk is there altime attending our   presentation and creating noise like cat and a child
    Try to check a participant named Eldon musk and epic mom is bling . Try a way to to debar them from our prenstation pls`,
    speaker: Sunantha,
  },
  {
    quote:
      "We will take starting state as zero because it is the starting state",
    speaker: Uday,
  },
  {
    quote: "Brijo is a boy of any gender. What is your name Brijo?",
    speaker: Aruna,
  },
  {
    quote: "I think you guys have come directly from first year",
    speaker: Aparna,
  },
  {
    quote: "If you don't understand, please try to understand",
    speaker: Uday,
  },
  {
    quote: "Fall is summer and spring is winter",
    speaker: Aruna,
  },
  {
    quote: "Itna bhi nahi pata? Analytic nahi, ANAL-ytic hota hai",
    speaker: Aruna,
  },
  {
    quote: "Money can be transferred within 1 day or 24 hours",
    speaker: Tayyab,
  },
  {
    quote: "Two phases locking protocol has two phases",
    speaker: Aruna,
  },
  {
    quote: "Comic rays",
    speaker: Aparna,
  },
].reverse();

const QuoteDisplay: React.FC<{ quote: Quote; rank: number }> = (props) => (
  <>
    <span className="rank">{props.rank}</span>
    <p className="quote">"{props.quote.quote}"</p>
    <div className="polaroid">
      <img src={`./photos/${props.quote.speaker.code}.jpg`} alt="" />
      <span className="credit">{props.quote.speaker.name}</span>
    </div>
  </>
);

export const QuoteSlide: React.FC = () => {
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const handlekeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        if (slide !== 0) {
          setSlide(slide - 1);
        }
      } else if (event.key === "ArrowRight") {
        setSlide((slide + 1) % quotes.length);
      }
    };
    document.addEventListener("keydown", handlekeydown);
    return () => {
      document.removeEventListener("keydown", handlekeydown);
    };
  }, [slide]);

  return <QuoteDisplay quote={quotes[slide]} rank={quotes.length - slide} />;
};
