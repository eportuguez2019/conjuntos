import React, { useState, useEffect } from 'react';
import Brick from './Brick'
import Board from './Board';
import './SumaResta1.css';

import balloons from './imagenes/balloons.svg';
import  bauble from './imagenes/bauble.svg';
import baubles from './imagenes/baubles.svg';
import bloque from './imagenes/bloque.svg';
import bloquee from './imagenes/bloquee.svg';
import bloques from './imagenes/bloques.svg';
import bloquess from './imagenes/bloquess.svg';
import candlestick from './imagenes/candlestick.svg';
import community from './imagenes/community.svg';
import construccion from './imagenes/construccion.svg';
import cuerno from './imagenes/cuerno.svg';
import dancing from './imagenes/dancing.svg';
import fivestars from './imagenes/fivestars.svg';
import fourstars from './imagenes/fourstars.svg';
import friends from './imagenes/friends.svg';
import fruits from './imagenes/fruits.svg';
import giftbox from './imagenes/giftbox.svg';
import leftandrightshoefootprints from './imagenes/leftandrightshoefootprints.svg';
import number from './imagenes/number.svg';
import  protest from './imagenes/protest.svg';
import queso from './imagenes/queso.svg';
import satay from './imagenes/satay.svg';
import sweets from './imagenes/sweets.svg';




const SumaResta1 = () => {

    const [numBlock, setNumBlock] = useState(1);
    const [numOperation, setNumOperation] = useState(0);

    //<================================>
    const ope = ['sums', 'subt', 'mixt'];

    useEffect(() => {

        //console.log("operation ==> " + ope[numOperation]);
        //console.log("num Block ==> " + numBlock);

    }, [numBlock, numOperation, ope]);

    //Reset drag on drop
    function reset1() {

        var container = document.getElementsByClassName("board");

        for (let index = 0; index < container.length; index++) {
            if (container[index].childElementCount > 0) {
                var containerChild = document.getElementById('brick-container-' + index);
                var child = document.getElementById(index);
                container[index].appendChild(child);
                container[index].removeChild(child);
                containerChild.appendChild(child);
                
            }

        }

    }

    //pass to the next block and pass to the next operation if you finish [addition, subtraction, mixed]
    function nextBlock() {

        var numNextBlock = numBlock + 1;

        if (numNextBlock > 3) {

            var numNextOperation = numOperation + 1;

            if (numNextOperation > 2) {
                setNumOperation(0);
            } else {
                setNumOperation(numOperation => numOperation + 1);
            }

            setNumBlock(1);
        } else {
            setNumBlock(numBlock => numBlock + 1);
        }

    }

    function checkAnswers(num) {

        var count = 0;

        var bricks = document.getElementsByClassName("brick-container");
        for (let index = 0; index < bricks.length; index++) {

            if (bricks[index].id.includes('static')) {
                console.log("Operation ==> " + bricks[index].textContent);
            }

        }

        var container = document.getElementsByClassName("board");

        for (let index = 0; index < container.length; index++) {
            if (container[index].childElementCount > 0) {
                var child = document.getElementById(index);
                console.log("Result ==> " + child.textContent);
                
                count += 1;               
            }

        }

        if (count === num) {
            reset1();
            nextBlock();
            var error = document.getElementById('error');
            error.textContent = '';
        } else {
            var error = document.getElementById('error');
            error.textContent = 'Se deben completar todas las operaciones';
        }

    }

    const operations = {
        'sums1': [
            { 'operation': '3', ruta: balloons },
            { 'operation': '1', ruta: bauble  },
            { 'operation': '4', ruta: baubles, bauble },
            { 'operation': '6', ruta: bloques },
            { 'operation': '10', bloques, bloquess },
        ],
        'sums2': [
            { 'operation': '8', ruta:bloque, bloquee },
            { 'operation': '4', ruta: candlestick },
            { 'operation': '2', ruta: cuerno },
            { 'operation': '5', ruta: fivestars },
            { 'operation': '7', ruta: number },
        ],
        'sums3': [
            { 'operation': '9', ruta: bloque, bloques },
            { 'operation': '4', ruta: community },
            { 'operation': '2', ruta: dancing },
            { 'operation': '1', ruta: queso },
            { 'operation': '3', satay },
        ],
        'subt1': [
            { 'operation': '3', ruta: sweets },
            { 'operation': '2', ruta: fruits },
            { 'operation': '4', ruta: fourstars },
            { 'operation': '6', ruta: balloons, balloons },
            { 'operation': '10', fivestars, fivestars },
        ],  
        'subt2': [
            { 'operation': '2', ruta: friends },
            { 'operation': '1', ruta: giftbox },
            { 'operation': '4', ruta: leftandrightshoefootprints, leftandrightshoefootprints },
            { 'operation': '7', ruta: number },
            { 'operation': '10', fivestars, fivestars },
        ],
        'subt3': [  
            { 'operation': '3', ruta: balloons },
            { 'operation': '1', ruta: bauble  },
            { 'operation': '4', ruta: baubles, bauble },
            { 'operation': '6', ruta: bloques },
            { 'operation': '10', bloques, bloquess },
        ],
        'mixt1': [
            { 'operation': '4', ruta: construccion },
            { 'operation': '2', ruta: protest },
            { 'operation': '6', ruta: balloons, balloons},
            { 'operation': '4', ruta: bloquess },
            { 'operation': '7', baubles, baubles, bauble },
        ],
        'mixt2': [
            { 'operation': '9', ruta: bloque, bloques },
            { 'operation': '5', ruta: fivestars },
            { 'operation': '7', ruta: number },
            { 'operation': '4', ruta: fourstars },
            { 'operation': '6', ruta: balloons, balloons },
        ],

        'mixt3': [
           { 'operation': '10', bloques, bloquess },
           { 'operation': '8', ruta:bloque, bloquee },
           { 'operation': '6', ruta: balloons, balloons},
           { 'operation': '4', ruta: bloquess },
           { 'operation': '2', ruta: dancing },
        ],
    }

    const printImages = (e) => {
        let finalBlocks = [];
        for (let i = 0; i < 6; i++) {
          let random = Math.floor(Math.random() * operations.length);
          finalBlocks.push(random)
        }
    
        return finalBlocks;
      }

    //Numbers
    const numbers = [0, 1, 2, 3, 4];

    //Numbers for colors
    const numbersColors = [0, 1, 2, 3, 4];
    const numbersColors2 = [0, 1, 2, 3, 4];

    function createBricksOperations(num) {

        var bricks = [];
        var numbersRandom;
        var numbersRandomColor;
        var numbersRandomColor2;

        //comment
        numbersRandom = numbers.sort(function () { return Math.random() - 0.5 });

        //comment
        numbersRandomColor = numbersColors.sort(function () { return Math.random() - 0.5 });
        numbersRandomColor2 = numbersColors2.sort(function () { return Math.random() - 0.5 });

        var sumsObject = operations[ope[numOperation] + numBlock];

        for (let index = 0; index < num; index++) {
            bricks.push(<div style={{ display: "flex", justifyContent: "space-between" }} ><div style={{ display: 'flex', justifyContent: "space-between" }}><Brick id={"static_" + index} color={colors[numbersRandomColor[index]]} text={sumsObject[numbersRandom[index]].operation + ' ='} /><main className="flexbox"><Board id={"board" + index} className="board"></Board></main></div><Brick src={balloons} id={index} draggable={true} color={colors[numbersRandomColor2[index]]} text={sumsObject[numbersRandom[index]].result} /> <br /> </div>, <br />);
        }

        return <div>{bricks}</div>
    }

    const colors =
        [
            '#2A920F',
            '#2595EC',
            '#E2A647',
            '#AB18DC',
            '#E61111',
        ]

    let displayContent = <div>
        <h1>
            Conjuntos 3
        </h1>
        <hr />

        <h3>
            Observe el número y arrastre la imagen correspondiente.
        </h3>

        <div style={{ fontSize: '20px', color: 'red' }} id='error'>

        </div>

        <br></br>
        {createBricksOperations(3)}

        <button className='button' onClick={() => { checkAnswers(3); }}>
            Continuar
        </button>

        <br></br>
        <br></br>
        <br></br>

        <hr />

    </div>

    return (
        <>
            <div>
                {displayContent}
            </div>
        </>
    )

}


export default SumaResta1