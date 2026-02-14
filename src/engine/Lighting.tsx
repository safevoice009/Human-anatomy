export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 5]} intensity={1} castShadow />
      <directionalLight position={[-6, -4, -5]} intensity={0.4} />
    </>
  )
}
