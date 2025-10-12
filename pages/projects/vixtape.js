import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function Vixtape() {
  return (
    <>
      <PageSEO
        title={`Vixtape - ${siteMetadata.author}`}
        description="Interactive MVP demo built in Framer for SWARM NYC - showcasing a content streaming platform concept with dual-screen experience and content remixing capabilities."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Vixtape
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Interactive MVP demo built in Framer for SWARM NYC
          </p>
        </div>

        <div className="container py-12">
          <div className="prose max-w-none pb-8 dark:prose-dark">
            <div className="mb-8">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <iframe
                  name="vixtape-demo"
                  title="vixtape-demo"
                  src="https://player.cloudinary.com/embed/?cloud_name=dvcywi3uf&public_id=jrguse%2Fport%2Fvixtape&profile=cld-default"
                  width="640"
                  height="360"
                  style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>

            <h2>Project Overview</h2>
            <p>
              Vixtape is an interactive MVP demo created for SWARM NYC to showcase an innovative
              content streaming platform concept. Built entirely in Framer as a no-code prototype,
              this demo was designed for investor presentations to communicate the product vision
              and user experience.
            </p>
            <p>
              The concept features a experience where viewers watch content on a TV display (16:9
              ratio). Content attribution is maintained through QR codes that display metadata about
              audio and video creators. This demo focuses on visualizing the user flow and
              interaction patterns rather than implementing production-ready features.
            </p>

            <div className="not-prose my-6 rounded-lg border-2 border-yellow-400 bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                ⚠️ <strong>Note:</strong> This is a conceptual MVP demo built in Framer for
                presentation purposes. It demonstrates the UX/UI vision and interaction design but
                does not include backend functionality or production features.
              </p>
            </div>

            <h2>Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3>Design & Prototyping</h3>
                <ul>
                  <li>Framer (No-code prototyping platform)</li>
                  <li>Interactive wireframes and mockups</li>
                  <li>Animations and micro-interactions</li>
                  <li>Click-through prototype flows</li>
                </ul>
              </div>
              <div>
                <h3>Demo Capabilities</h3>
                <ul>
                  <li>TV display optimization (16:9 aspect ratio)</li>
                  <li>Device concept visualization</li>
                  <li>Interactive navigation flows</li>
                  <li>Presentation-ready animations</li>
                </ul>
              </div>
            </div>

            <h2>Links</h2>
            <div className="flex gap-4">
              <Link
                href="http://swarmnyc.com/"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold"
                rel="noopener noreferrer"
                target="_blank"
              >
                SWARM NYC →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
