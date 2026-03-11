import React, { useEffect, useState } from "react";

const quoteSets = {
  about: [
    {
      text: "The only way to make sense out of change is to plunge into it.",
      author: "Alan Watts",
    },
    { text: "We're all just walking each other home.", author: "Ram Dass" },
    {
      text: "Trying to define yourself is like trying to bite your own teeth.",
      author: "Alan Watts",
    },
    { text: "Treat everyone you meet like God in drag.", author: "Ram Dass" },
  ],
  treatments: [
    { text: "Be here now.", author: "Ram Dass" },
    {
      text: "The only way to make sense out of change is to plunge into it.",
      author: "Alan Watts",
    },
    { text: "Treat everyone you meet like God in drag.", author: "Ram Dass" },
    {
      text: "Trying to define yourself is like trying to bite your own teeth.",
      author: "Alan Watts",
    },
  ],
  team: [
    { text: "We're all just walking each other home.", author: "Ram Dass" },
    { text: "Be here now.", author: "Ram Dass" },
    { text: "Treat everyone you meet like God in drag.", author: "Ram Dass" },
    {
      text: "The only way to make sense out of change is to plunge into it.",
      author: "Alan Watts",
    },
  ],
  referrals: [
    {
      text: "The only way to make sense out of change is to plunge into it.",
      author: "Alan Watts",
    },
    { text: "We're all just walking each other home.", author: "Ram Dass" },
    {
      text: "Trying to define yourself is like trying to bite your own teeth.",
      author: "Alan Watts",
    },
    { text: "Treat everyone you meet like God in drag.", author: "Ram Dass" },
  ],
  contact: [
    { text: "Be here now.", author: "Ram Dass" },
    { text: "We're all just walking each other home.", author: "Ram Dass" },
    {
      text: "The only way to make sense out of change is to plunge into it.",
      author: "Alan Watts",
    },
    { text: "Treat everyone you meet like God in drag.", author: "Ram Dass" },
  ],
  contactSuccess: [
    { text: "We're all just walking each other home.", author: "Ram Dass" },
    { text: "Be here now.", author: "Ram Dass" },
    { text: "Treat everyone you meet like God in drag.", author: "Ram Dass" },
    {
      text: "The only way to make sense out of change is to plunge into it.",
      author: "Alan Watts",
    },
  ],
};

export default function HeroQuote({ page }) {
  const quotes = quoteSets[page] ?? quoteSets.about;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (quotes.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 9000);

    return () => window.clearInterval(intervalId);
  }, [quotes]);

  const quote = quotes[index];

  return (
    <figure className="hero-quote" key={`${page}-${index}`}>
      <blockquote className="hero-quote__text">
        <p>{quote.text}</p>
      </blockquote>
      <figcaption className="hero-quote__author">{quote.author}</figcaption>
    </figure>
  );
}
