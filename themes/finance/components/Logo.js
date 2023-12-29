import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const Logo = props => {
  return (
    <Link href="/" passHref legacyBehavior>
      <div className="flex flex-nowrap justify-center items-center cursor-pointer font-extrabold">
        <LazyImage
          src={siteConfig('HEO_SITE_LOGO', null, CONFIG)}
          width={200}
          height={28}
          alt={siteConfig('AUTHOR')}
          className="mr-4 hidden md:block"
        />
      </div>
    </Link>
  )
}
export default Logo
