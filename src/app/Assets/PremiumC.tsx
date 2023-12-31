

import Image from "next/image"
import { BsShop, BsArrowRightShort } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { topBrands } from "../Comps/databaseLocal";
import { Button } from "../../../components/ui/button"
import Link from "next/link";
import AddToCartButtonHomePage from "./addToCartHome";

import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";


export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="products"]{
        _id,
      productImageMain,
        productTitle ,
        productPrice ,
        productDescription,
    }`)
    return res
}

export default async function PremiumC() {

    const productsData = await getProductData()

    return (
        <>
            <main key='1' className=" md:mx-[100px] mx-[10px]  ">

                <section className="grid  md:grid-cols-4 grid-cols-2 md:gap-x-[50px] gap-x-8 md:mx-0 mx-[3px] ">

                    {
                        productsData.map((items: any) => {
                            return (

                                <span key={items._id} className="inline bg-slate-400 bg-opacity-30 md:px-3 md:py-3 px-[7px] py-[6px]  md:rounded-2xl rounded-lg mb-2 md:mb-4 ">
                                    <Link href={`/productDetail/${items._id}`}>
                                        <Image className="rounded-lg md:w-[250px] w-[150px]" src={urlForImage(items.productImageMain).url()} alt="tg" width={250} height={300} />
                                        <div className="md:gap-0 justify-center">
                                            <span className="   ">
                                                <p className="text-slate-400 md:mt-3 mt-2 md:text-[12px] text-[10px]">@Seller Name</p>
                                                <h1 className="md:inline text-white md:text-lg text-base  ">{items.productTitle}</h1>
                                            </span>
                                            <span className=" ">
                                                <p className="text-slate-400  md:text-[12px] text-[10px]">Price</p>
                                                <h1 className=" text-white  md:text-lg text-base   ">${items.productPrice}</h1>
                                            </span>
                                        </div>
                                    </Link>

                                    <AddToCartButtonHomePage />

                                    <Link href={`/productDetail/${items._id}`}  >
                                        <button className="md:inline-flex flex items-center text-center  bg-gradient-to-t from-[#671ae4] to-[#b75cff]  md:px-[60px] px-[36px] md:py-3 py-[7px] text-white rounded-full font-semibold md:mt-2 mt-[6px] md:text-base text-[12px] "   ><BsShop className="mr-2 md:text-2xl text-xl " /> Buy Now</button>
                                    </Link>
                                </span>
                            )
                        })
                    }

                </section>


                <div className=" text-center my-[30px] md:grid hidden">
                    <Link href='/collection'  >
                        <button className="inline-flex items-center md:border-2 md:bg-transparent transition-transform  hover:border-0 md:hover:bg-gradient-to-t from-[#671ae4] to-[#b75cff] px-[70px] py-4 md:ml-0 ml-4 text-white  rounded-full font-semibold "  > View More <BsArrowRightShort className="ml-2 text-2xl " /></button>
                    </Link>
                </div>

                <div className=" text-center my-[30px] md:hidden">
                    <Link href='/collection'  >
                        <button className="inline-flex items-center bg-gradient-to-t from-[#671ae4] to-[#b75cff]  px-[30px] py-3 md:ml-0 ml-4 text-white  rounded-full font-semibold "  > View More <BsArrowRightShort className="ml-1 mt-1 text-2xl " /></button>
                    </Link>
                </div>



                <div className="md:my-[70px] my-[40px] text-center">
                    <h1 className="inline text-white md:text-4xl text-3xl font-bold ">Our Top Brands</h1>
                    <p className="text-slate-400 md:mt-5 mt-2  md:text-xl text-[15px]">Our top verified and most trustable brands are here.</p>
                </div>


                <section className="grid grid-cols-3 md:gap-[50px] gap-[10px] md:mt-[70px] mt-[30px] ">
                    {topBrands.map((elem) => (
                        <div key={elem.id} >
                            <span className=" flex relative items-center justify-center mx-1">
                                <Image className="md:rounded-xl rounded-lg absolute md:mt-[70px] md:w-[100px] w-[30px]" src={elem.logoUrl} alt="sh3" width={100} height={100} />
                                <Image className="rounded-xl md:pb-[170px] pb-[80px] bg-[#2f3454] md:w-[389px] w-[120px]" src={elem.bgUrl} alt="sh3" width={389} height={261} />
                                <div className="absolute md:mt-[260px] text-center">
                                    <h1 className="flex text-white md:text-2xl text-[12px] text-center font-semibold items-center md:ml-[120px] ml-[30px] md:mt-0   mt-[85px]">{elem.name} <MdVerified className="mx-1 text-blue-500" /></h1>
                                    <p className="text-slate-400  md:mt-3 mt-[6px] md:px-0 px-1 md:text-base text-[7px]">{elem.description}</p>
                                </div>
                            </span>
                        </div>
                    ))}
                </section>


                <div className="bg-gradient-to-t from-[#671ae4] to-[#b75cff] text-center mx-[50px]  md:mt-[70px] mt-[30px] rounded-xl pb-[40px] pt-[50px]">
                    <h2 className="text-white text-4xl font-bold">Heighest Quality Collection</h2>
                    <Link href='/male' >
                        <Button className="text-xl text-bold text-white bg-slate-300 bg-opacity-40 mt-[20px] hover:bg-opacity-50" variant="secondary">Get Started</Button>
                    </Link>
                </div>
            </main>
        </>
    )
}
