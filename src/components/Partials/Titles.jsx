export function RandSubtitle({subtitles}) {
  const randSubtitles = subtitles[Math.floor(Math.random() * subtitles.length)];
  return(
    <h2 className="mb-4 text-center text-2xl italic">{randSubtitles}</h2>
  )
}

export function Title({text}) {
  return(
    <h1 className="mb-4 text-8xl font-extrabold">{text}</h1>
  )
}

export function Subtitle({text}) {
  return(
    <h2 className="mb-4 text-center text-2xl italic">{text}</h2>
  )
}