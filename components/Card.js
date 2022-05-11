import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, date, skills, clientName, clientURL }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={336}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={336}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {/* <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p> */}
        <p className="text-primary-500 prose mb-0.5 max-w-none dark:text-white">
          <span className="font-bold">Date:</span> {date}
        </p>
        <p className="text-primary-500 prose mb-0.5 max-w-none dark:text-white">
          <span className="font-bold">Skills:</span> {skills}
        </p>
        {clientURL ? (
          <Link
            href={clientURL}
            aria-label={`Link to ${title}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="mb-5">
              <span className="font-bold">Client:</span> {clientName}
            </p>
          </Link>
        ) : (
          <p className="prose mb-5 max-w-none text-gray-500 dark:text-gray-400">
            <span className="font-bold">Client:</span> {clientName}
          </p>
        )}

        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-bold leading-6"
            aria-label={`Link to ${title}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
