import Images from "./Images";
import Buttons from "./Buttons";
import NavArrows from "./NavArrows";
import Heading from "./Heading";
import OurMerch from "./OurMerch";
export default function Home()
{
  return (
    <main>
      <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center">
        <OurMerch/>
        <div className="flex items-center justify-between">
          <Heading />
          <NavArrows />
        </div>
      </div>
      <Buttons />
      <Images />
    </main>
  )
}

