import { Ripple, initTWE } from "tw-elements";
initTWE({ Ripple });

const Products = () => {

  
  return (
    
    <div className="block rounded-lg bg-blue-200 shadow-lg w-1/3 m-auto mt-6 text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div class="text-3xl font-bold  border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
        product name
      </div>
      <div className="flex p-3 justify-evenly">
        <div class="p-6">
          <span className="text-red-700 font-bold text-2xl">$ 800.00</span>{" "}
          <span className="line-through">$ 1000.00</span>
          <div class="mb-4 text-base flex justify-center m-6 gap-4">
            <button className=" bg-red-500 px-3 rounded-lg text-white text-2xl font-extrabold">
              -
            </button>
            <p className="text-2xl font-extrabold">[ 5 ]</p>
            <button className=" bg-green-500 px-3 rounded-lg text-white text-2xl font-extrabold">
              +
            </button>
          </div>
          <div className="mt-10">
                      <span className=" font-bold">Total Price:</span><span>$ 4000.00</span>
          </div>

        </div>
        <div className="flex justify-center ">
          <img
            className="w-[200px] h-[200px]"
            src="https://st-troy.mncdn.com/mnresize/800/800/Content/media/ProductImg/original/mtpc3tua-apple-iphone-15-512gb-black-638305548989559998.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300 text-3xl font-bold">
        <button
          type="button"
          className="bg-red-500 px-4 py-1 rounded-lg text-white hover:bg-red-600"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Products;
