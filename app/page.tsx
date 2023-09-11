import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { MainNav } from "@/components/main-nav"
import { CartItems } from "@/components/cart-items"
import { CheckoutSession } from "@/components/checkout-session"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SiteBlob } from "@/components/site-blob"
import { ProductGallery } from "@/components/product-gallery"
import { TailwindIndicator } from "@/components/tailwind-indicator"

interface Props {}

export default function Page() {
  return (
    <div>
      <div>
        <SiteHeader /> 
      </div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Boujè</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">Store</p>
      </div>
      <div>
        <main> 
          <div className="w-16 h-16 bg-transparent">
            {/* This is an empty spacing block */}
          </div>
          {/* <div className="text-center">
            <p> Just some simple Text</p>
          </div> */}
          <div className="w-16 h-16 bg-transparent">
            {/* This is an empty spacing block */}
          </div>
        </main>
      </div>
      <div>
        <SiteFooter />
      </div>
    </div>
  )
}
