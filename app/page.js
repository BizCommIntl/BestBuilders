import Link from "next/link";
import TopNav from "./components/Nav/TopNav";

export default function Home() {
  return (
    // <main className="px-4 md:xl:px-16  min-h-screen   flex flex-col justify-between border border-red-600">
    <main style={{'--image-url': `url(${'/SiteImages/Default/UC-5.png'})`,'--image-url2': `url(${'/SiteImages/Default/UC-4.png'})`}}  
          className={"bg-[image:var(--image-url)] bg-no-repeat bg-top bg-auto h-screen " 
                    // + " hover:bg-[image: var(--image-url)]  focus:bg-[image:var(--image-url)] hover:bg-top hover:z-50 hover:bg-auto" 
                  } >

          {/* className='hover:bg-[image:var(--image-url)] focus:bg-[image:var(--image-url)] ...' */} 

{/* //////// SAMPLES */}
{/* <div class="bg-[url('/img/hero-pattern.svg')]">
  <!-- ... -->
</div> */}
{/* style={{backgroundImage: `url(${fetchedImgSrc})`}} */}
{/* //////// This application of custom properties can be used for implementing dynamic values with tailwind like colors fetched from an API. */}
{/* <div
  style={{'--color': fetchedColor}} 
  className='text-[color:var(--color)]'>
    <!-- ... -->
</div> */}




<p className="block">Mobile Screen</p>
<p className="hidden sm:block">sm- small screen</p>
<p className="hidden md:block">md- medium screen</p>
<p className="hidden lg:block">lg- large screen</p>
<p className="hidden xl:block">xl- extra large</p>
<p className="hidden 2xl:block">2xl</p>

<br />
<br />
      <ul>
        <li><Link href='/About'>About</Link></li>
        <li><Link href='/Contact'>Contact Us</Link></li>

      </ul>

      {/* <TopNav /> */}


    </main>
  )
}
