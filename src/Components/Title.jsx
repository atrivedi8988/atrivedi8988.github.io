import React from "react";
import Typewriter from "typewriter-effect";
import titleList from "../data/titleList";

export function Title() {
  return (
    <Typewriter
      options={{
        strings: titleList,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
