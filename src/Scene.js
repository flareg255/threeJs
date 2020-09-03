import React, { useRef, useState } from 'react';
import Box from './Box';
import Box_group from './Box_group';
import Octahedron from './Octahedron';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three/src/Three'
import _ from 'lodash';

import style from './index.css';

const Scene = (props) => {

    // let list = [];

    // for(let i = 0; i < 250; i++){

    //     let listChild = [];

    //     for(let j = 0; j < 3; j++){
    //         if(randBetween(1, 10) % 2 === 0){
    //             listChild[j] = randBetween(1, 10);
    //         }else{
    //             listChild[j] = randBetween(1, 10) * -1;
    //         }
    //     }

    //     list.push(listChild);
    // }

    // let boxList = [];

    // for(let data in list){
    //     // console.log(data);
    //     boxList.push(<Box key={data} position={list[data]} />)
    // }

    // console.log(list);
    // console.log(boxList);

    // let group = useRef()
    // let theta = _.random(5, true)

    let theta = 0
    // useFrame(() => {
    //     theta += 1
    //     console.log(theta)
    // })

    return (
        <Canvas>
            <ambientLight color="#987456" />
            <pointLight color="white" intensity={1} position={[theta, theta, theta]} />
            {/* <Octahedron /> */}
            <Box_group />
            {/* <fog attach="fog" args={['#cc7b32', 50000, 2]} /> */}
            {/* {boxList} */}
        </Canvas>
    )
}

export default Scene;
