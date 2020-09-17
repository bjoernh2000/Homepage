import React, { Component } from "react";

export class Interpreter extends Component {
  render() {
    return (
      <div>
        <h1>Interpreter</h1>
        <p>
          I built an interpreter in ocaml, that handles a number of low-level
          commands.
        </p>
        <p>Commands: </p>
        <p>PushS - String</p> <p>PushN - Name/Variable</p>{" "}
        <p>PushB - Boolean</p> <p>PushU - Unit</p>{" "}
        <p>
          Add | Sub | Mul | Div | Rem | Neg - Arithmetic operations of top
          elements on the stack
        </p>
        <p>Pop - Pop off Stack</p> <p>Swap - Swap top 2 elements on stack</p>{" "}
        <p>Concat - concat 2 strings on stack</p>{" "}
        <p>And | Or | Not - Boolean operations</p>{" "}
        <p>Equal | LessThan - Equate Numbers</p>{" "}
        <p>Bind - Bind value to a name/variable</p> <p>If - Conditionals</p>{" "}
        <p>Block - A block that contains a list of commands</p>{" "}
        <p>DefFun - Define function</p>{" "}
        <p>Call - Call function, and return to this point</p>{" "}
        <p>Return - Inside function, return the top elem on stack</p>{" "}
        <p>
          DefInOut - Function that also returns top element without return
          statement
        </p>
        <a href="https://github.com/bjoernh2000/Ocaml-Interpreter">
          Visit the github
        </a>
        <h2>Built with</h2>
        <p>Ocaml</p>
      </div>
    );
  }
}

export default Interpreter;
