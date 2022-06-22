import { Sphere, MeshDistortMaterial } from "@react-three/drei"

export default function Box() {
   return(
    <Sphere visible={true} args={[1,100,200]} scale={2}>
        <MeshDistortMaterial color="#8352FD" attach="material" speed={2} distort={0.5} roughness={1}/>
    </Sphere>
   ) 
}