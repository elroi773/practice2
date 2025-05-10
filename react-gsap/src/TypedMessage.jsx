import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all"; // 오타 수정
import { useGSAP } from "@gsap/react";
import "./App.css";

gsap.registerPlugin(SplitText); // 오타 수정

export const TypedMessage = ({ message }) => {
  const blockRef = useRef(null);
  const tlRef = useRef();

  useGSAP(() => {
    const s = new SplitText(blockRef.current, {
      type: "lines,words",
    });

    const tl = gsap.timeline({ delay: 0.5, repeatDelay: 0.5, repeat: -1 });

    tl.addLabel("enter");
    tl.fromTo(
      s.words,
      { yPercent: 100 },
      { yPercent: 0, ease: "circ.out", stagger: 0.2 },
      "enter"
    );
    tl.fromTo(
      s.words,
      { opacity: 0 },
      { opacity: 1, ease: "power1.out", stagger: 0.2 },
      "enter"
    );
    tl.addPause();

    tl.to(
      s.words,
      {
        yPercent: -200,
        opacity: 0,
        ease: "circ.in",
        stagger: 0.1,
        duration: 0.4,
      },
      "exit"
    );

    tlRef.current = tl; // 수정

  }, []);

  return <h2 className="message" ref={blockRef}>{message}</h2>;
};
