import * as THREE from 'three'
import {Box, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';



const Dog = () => {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP());

  const model = useGLTF('/model/dog.drc (1).glb');
  useThree(({camera,gl})=>{
    camera.position.z=0.4;
    gl.toneMapping = THREE.ReinhardToneMapping
    gl.outputColorSpace = THREE.SRGBColorSpace
  })

  const [normalMap,branchMap,branchNormalMap] = (useTexture(["/dog_normals.jpg","branches_diffuse.jpg","branches_normals.jpg"]))
  .map(texture=>{
    texture.flipY = false,
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  })

  const [
    mat1,mat2,mat3,mat4,mat5,mat6,mat7,mat8,mat9,mat10,
    mat11,mat12,mat13,mat14,mat15,
    mat16,mat17,mat18,mat19,mat20
  ] = (useTexture([
    "./public/metacap/mat-1.png",
    "./public/metacap/mat-2.png",
    "./public/metacap/mat-3.png",
    "./public/metacap/mat-4.png",
    "./public/metacap/mat-5.png",
    "./public/metacap/mat-6.png",
    "./public/metacap/mat-7.png",
    "./public/metacap/mat-8.png",
    "./public/metacap/mat-9.png",
    "./public/metacap/mat-10.png",
    "./public/metacap/mat-11.png",
    "./public/metacap/mat-12.png",
    "./public/metacap/mat-13.png",
    "./public/metacap/mat-14.png",
    "./public/metacap/mat-15.png",
    "./public/metacap/mat-16.png",
    "./public/metacap/mat-17.png",
    "./public/metacap/mat-18.png",
    "./public/metacap/mat-19.png",
    "./public/metacap/mat-20.png",
    
  ])).map(texture=>{
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  })

  const dogMaterial = new THREE.MeshMatcapMaterial({
        normalMap:normalMap,
        matcap:mat19
  })

  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap:branchNormalMap,
    // map:branchMap,
    matcap:mat1,
  })

  const material = useRef({
    uMatcap1:{value :mat19},
    uMatcap2:{value :mat1},
    uProgress:{value : 1.0}
  })

  
    function onBeforeCompile(shader) {
        shader.uniforms.uMatcapTexture1 = material.current.uMatcap1
        shader.uniforms.uMatcapTexture2 = material.current.uMatcap2
        // shader.uniforms.uMap = material.current.uMap
        shader.uniforms.uProgress = material.current.uProgress

        // Store reference to shader uniforms for GSAP animation

        shader.fragmentShader = shader.fragmentShader.replace(
            "void main() {",
            `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
        )

        shader.fragmentShader = shader.fragmentShader.replace(
            "vec4 matcapColor = texture2D( matcap, uv );",
            `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
        )
    }

    dogMaterial.onBeforeCompile = onBeforeCompile
    branchMaterial.onBeforeCompile = onBeforeCompile

  model.scene.traverse((child)=>{
    if(child.name.includes("DOG"))
    {
      child.material = dogMaterial
    }else{
      child.material = branchMaterial
    }
  })

  const {actions} = useAnimations(model.animations,model.scene);

  useEffect(() => {
    actions["Take 001"].play()
  }, [actions])


  const dogModel = useRef(model);

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#section-1",
        endTrigger:"#section-5",
        start:"top top",
        end:"bottom bottom",
        scrub:true,
      }
    })

    // console.log(dogModel.current.meshes.includes("eye"));
    
    tl.to(dogModel.current.scene.position,{
      z:"-=0.5",
      y:"+=0.12"
    })
    .to(dogModel.current.scene.rotation,{
      x:`+=${Math.PI/14}`
    })
    .to(dogModel.current.scene.rotation,{
      delay:0.2,
      y:`-=${Math.PI}`
    },'third')
    .to(dogModel.current.scene.rotation,{
      delay:0.2,
      x:`+=${Math.PI/38}`
    },'third')
    .to(dogModel.current.scene.position,{
      delay:0.2,
      x:"-=0.45",
      z:"+=0.2 ",
      y:"-=0.2"
    },'third')
    
  },[])


useGSAP(() => {

  const projects = [
    { name: 'Tomorrowland', box: '#box1' },
    { name: 'Navy Pier', box: '#box2' },
    { name: 'MSI Chicago', box: '#box3' },
    { name: 'Kikk Festival 2018', box: '#box5' },
    { name: 'The Kennedy Center', box: '#box6' },
    { name: 'Royal Opera Of Wallonia', box: '#box7' }
  ];

  projects.forEach((project) => {
    const element = document.querySelector(`[img-title="${project.name}"]`);
    
    if (element) {
      element.addEventListener('mouseenter', () => {
        gsap.to(project.box, {
          duration: 0.2,
          opacity: 1,
          overwrite: "auto", 
          ease: "power2.out"
        });

        gsap.to(`${project.box} p`, {
          duration: 0.3,
          opacity: 1,
          y: -40,
          stagger: 0.1,
          overwrite: "auto",
          ease: "power2.out"
        });
      });
      element.addEventListener('mouseleave', () => {
        // Text reset
        gsap.to(`${project.box} p`, {
          duration: 0.2,
          opacity: 0,
          y: 0,
          overwrite: "auto",
          ease: "power2.in"
        });

        // Box hide (Optional: agar box bhi hide karna hai)
        gsap.to(project.box, {
          duration: 0.2,
          opacity: 0,
          overwrite: "auto",
          delay: 0.1 
        });
      });
    }
  });

}, []);
  


  useEffect(() => {
  // 1. Matcaps ka data ek jagah rakh lo
  const projectData = [
    { title: "Tomorrowland", mat: mat19 },
    { title: "Navy Pier", mat: mat8 },
    { title: "MSI Chicago", mat: mat9 },
    { title: "This Way Louise's Phone", mat: mat12 },
    { title: "Kikk Festival 2018", mat: mat10 },
    { title: "The Kennedy Center", mat: mat8 },
    { title: "Royal Opera Of Wallonia", mat: mat13 },
  ];

  // 2. Reuse hone wala function (Transition Logic)
  const transitionMatcap = (targetMatcap, duration, ease) => {
    material.current.uMatcap1.value = targetMatcap;
    
    gsap.to(material.current.uProgress, {
      value: 0.0,
      duration: duration,
      ease: ease,
      overwrite: "auto", // Mouse spamming se hone wale glitch ko rokhne ke liye
      onComplete: () => {
        material.current.uMatcap2.value = material.current.uMatcap1.value;
        material.current.uProgress.value = 1.0;
      }
    });
  };

  // 3. Loop chala kar event listeners lagao
  projectData.forEach((item) => {
    // Selector ko check karo: Tomorrowland ke liye p nahi hai, baki ke liye p hai? 
    // Isliye hum broad selector use kar rahe hain jo dono handle kar le.
    const selector = `.ex[img-title="${item.title}"], .ex p[img-title="${item.title}"]`;
    const element = document.querySelector(selector);

    if (element) {
      const handleEnter = () => transitionMatcap(item.mat, 0.3, 'power2.inOut');
      const handleLeave = () => transitionMatcap(mat1, 0.5, 'linear');

      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);

      // Cleanup function (React best practice)
      return () => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      };
    }
  });
}, []);



  return (
    <>
      <primitive object={model.scene} position={[0.15,-0.55,0]} rotation={[0,Math.PI/5,0]} />
      <directionalLight position={[0,5,5]} intensity={1.5} />
    </>
  )
}

export default Dog
