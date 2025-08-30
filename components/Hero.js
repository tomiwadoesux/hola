import Image from "next/image";
export default function Hero() {
  return (
    <div className="h-[100vh] md:h-[105vh] w-[100vw]">
      <div className="absolute  flex flex-col gap-1 md:flex-col justify-between text-[#343434] right-16 top-7 md:top-7 ">
        <a href="mailto:Olaoluwaakinwale89@gmail.com" className="group">
          <h5 className="text-xs md:text-sm text-[#343434]">
            <span
              className="
        relative
        after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full
        after:bg-[#343434] after:origin-left after:scale-x-0
        group-hover:after:scale-x-100 after:transition-transform after:duration-300
      "
            >
              Olaoluwaakinwale89@gmail.com
            </span>
          </h5>
        </a>
        <h5 className="text-[10px] text-left md:text-xs text-xs">
          Based in Manchester, United Kingdom
        </h5>
      </div>

      <div className="flex lg:hidden flex-col absolute left-5 md:left-16 top-24 md:top-24 gap-3 md:gap-1  w-[85%] md:w-[85%] lg:w-[40%]">
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <h1 className="  text-left text-7xl md:text-9xl text-[#343434] lg:text-9xl">
              ÀKÍNWÁLÉ
            </h1>
          </div>
          <div className=" self-end pt-1">
            <h1 className="  text-right text-7xl md:text-9xl text-[#343434] lg:text-9xl">
              ỌLÀÓLÚWÀ
            </h1>
          </div>
          <div className="flex gap-2 self-end flex-row">
            <a
              href="https://www.instagram.com/olaoluwa.ak"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6116 0.0625H5.38763C3.97564 0.063576 2.6218 0.62496 1.62338 1.62338C0.62496 2.6218 0.063576 3.97564 0.0625 5.38762V12.6116C0.0633608 14.0237 0.62465 15.3777 1.62309 16.3763C2.62154 17.3749 3.9755 17.9364 5.38763 17.9375H12.6116C14.0236 17.9362 15.3775 17.3746 16.3759 16.3761C17.3743 15.3775 17.9356 14.0236 17.9367 12.6116V5.38762C17.936 3.97551 17.3748 2.62142 16.3763 1.62291C15.3778 0.624392 14.0237 0.0631459 12.6116 0.0625ZM16.1394 12.6116C16.1392 13.5471 15.7675 14.4444 15.1059 15.1059C14.4444 15.7675 13.5471 16.1392 12.6116 16.1394H5.38763C4.92438 16.1394 4.46566 16.0482 4.03769 15.8709C3.60971 15.6936 3.22086 15.4337 2.89333 15.1061C2.5658 14.7785 2.30601 14.3896 2.12881 13.9616C1.95161 13.5335 1.86046 13.0748 1.86056 12.6116V5.38762C1.86046 4.92441 1.95161 4.46572 2.12883 4.03775C2.30604 3.60978 2.56584 3.22092 2.89338 2.89338C3.22092 2.56584 3.60978 2.30604 4.03775 2.12883C4.46572 1.95161 4.92441 1.86046 5.38763 1.86056H12.6116C13.5469 1.86078 14.4439 2.23245 15.1053 2.89385C15.7667 3.55526 16.1384 4.45226 16.1386 5.38762L16.1394 12.6116Z"
                  fill="black"
                />
                <path
                  d="M9.00041 4.37849C6.45078 4.37849 4.37891 6.45118 4.37891 8.99999C4.37891 11.5488 6.45159 13.6215 9.00041 13.6215C11.5492 13.6215 13.6219 11.5488 13.6219 8.99999C13.6219 6.45118 11.55 4.37849 9.00041 4.37849ZM9.00041 11.8234C8.25158 11.8235 7.53339 11.5262 7.00382 10.9967C6.47424 10.4673 6.17667 9.74922 6.17656 9.00039C6.17645 8.25157 6.47382 7.53338 7.00324 7.0038C7.53266 6.47423 8.25077 6.17666 8.99959 6.17655C9.74842 6.17644 10.4666 6.47381 10.9962 7.00323C11.5258 7.53265 11.8233 8.25076 11.8234 8.99958C11.8235 9.7484 11.5262 10.4666 10.9968 10.9962C10.4673 11.5257 9.74923 11.8233 9.00041 11.8234ZM13.6317 3.30518C13.8506 3.30534 14.0646 3.3704 14.2466 3.49215C14.4286 3.6139 14.5704 3.78687 14.6541 3.98919C14.7379 4.19151 14.7597 4.41412 14.717 4.62886C14.6742 4.84361 14.5687 5.04086 14.4139 5.19569C14.2591 5.35052 14.0618 5.45598 13.8471 5.49873C13.6323 5.54149 13.4097 5.51963 13.2074 5.43591C13.0051 5.35219 12.8321 5.21037 12.7104 5.02838C12.5886 4.84639 12.5236 4.63239 12.5234 4.41343C12.5234 3.80243 12.9378 3.30518 13.6317 3.30518Z"
                  fill="black"
                />
              </svg>
            </a>
            <div className="">
              <a
                href="https://www.tiktok.com/@olaoluwa.ak"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.451 0.707617C12.5764 0.69043 13.6936 0.699367 14.8101 0.69043C14.8472 2.08674 15.4137 3.34349 16.315 4.27437L16.3137 4.27299C17.2837 5.14681 18.546 5.7133 19.9375 5.80955L19.9567 5.81093V9.27318C18.6422 9.24018 17.4061 8.93699 16.2917 8.41587L16.348 8.43924C15.809 8.18005 15.3532 7.91399 14.9201 7.61699L14.9558 7.64037C14.9476 10.1491 14.9641 12.6577 14.9387 15.1575C14.8678 16.4314 14.4443 17.5933 13.7651 18.5634L13.7788 18.5421C12.6431 20.1687 10.8033 21.2364 8.71129 21.2996H8.70166C8.6171 21.3037 8.51741 21.3058 8.41704 21.3058C7.22766 21.3058 6.11597 20.9744 5.1686 20.399L5.1961 20.4148C3.47185 19.3774 2.28247 17.6022 2.06247 15.5377L2.05972 15.5095C2.04254 15.0798 2.03429 14.6501 2.05147 14.2294C2.38835 10.9438 5.1411 8.40212 8.48716 8.40212C8.86322 8.40212 9.23172 8.43443 9.58991 8.49562L9.55141 8.49012C9.5686 9.7613 9.51704 11.0332 9.51704 12.3044C9.22622 12.1992 8.89072 12.138 8.54079 12.138C7.25654 12.138 6.1641 12.9589 5.75985 14.1049L5.75366 14.1256C5.66222 14.4191 5.60929 14.7567 5.60929 15.1059C5.60929 15.2476 5.61822 15.3878 5.63472 15.5253L5.63335 15.5088C5.8616 16.9154 7.06747 17.9769 8.52154 17.9769C8.56347 17.9769 8.60472 17.9762 8.64597 17.9742H8.63979C9.6456 17.9439 10.5187 17.4029 11.0123 16.6033L11.0192 16.5909C11.2028 16.3352 11.3286 16.0258 11.3705 15.6896L11.3712 15.68C11.4572 14.1421 11.4228 12.6131 11.431 11.0751C11.4393 7.61287 11.4228 4.15887 11.4482 0.705555L11.451 0.707617Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div className="">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.48066 14.5438C8.90389 17.5667 8.20002 20.4647 6.11423 21.9785C5.46987 17.4096 7.05929 13.9782 7.79745 10.3352C6.53877 8.2172 7.94861 3.95444 10.6027 5.00456C13.8683 6.29646 7.77493 12.8798 11.8651 13.7022C16.1364 14.5604 17.8802 6.29109 15.2321 3.60219C11.4051 -0.280985 4.09268 3.51376 4.99167 9.07331C5.21039 10.4322 6.61439 10.8445 5.55293 12.7207C3.10367 12.1771 2.37303 10.2457 2.46683 7.67042C2.61851 3.45485 6.25414 0.503796 9.90146 0.0953351C14.5137 -0.420891 18.8424 1.78822 19.4401 6.12712C20.1135 11.0246 17.3586 16.3284 12.4263 15.9467C11.0894 15.8427 10.5281 15.1801 9.48066 14.5438Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className=" lg:hidden">
          <div className="flex pt-8 h-[100%] -z-10 flex-row-reverse gap-4">
            <div className="flex   flex-row-reverse gap-4">
              <div className="  aspect-[2/3] w-[60%] md:w-[60%] lg:[40%] bg-black ">
                <Image
                  src="/images/67.webp"
                  alt="Hmm"
                  width={800}
                  height={800}
                  className="object-cover bg-black"
                />
              </div>
              <div className=" w-[25%] flex flex-col gap-4 self-center ">
                <Image
                  src="/images/49.webp"
                  alt="Hmm"
                  width={800}
                  height={800}
                  className="object-cover bg-black aspect-square w-40"
                />
                <Image
                  src="/images/69.webp"
                  alt="Hmm"
                  width={800}
                  height={800}
                  className="object-cover bg-black aspect-square w-40"
                />
                <Image
                  src="/images/44.webp"
                  alt="Hmm"
                  width={800}
                  height={800}
                  className="object-cover bg-black aspect-square w-40"
                />
              </div>
            </div>
            <div className="text-left text-nowrap hidden md:block lg:hidden flex flex-col  pt-5 text-[#343434] ">
              <h5 className="text-base md:text-lg">
                Height: 182.88cm / 6&apos;0
              </h5>
              <h5 className="text-base md:text-lg">Waist: 82.5cm</h5>
              <h5 className="text-base md:text-lg">Chest: 91.4cm</h5>
              <h5 className="text-base md:text-lg">Leg: 83.82cm</h5>
              <h5 className="text-base md:text-lg">Eye Color: Brown</h5>
              <h5 className="text-base md:text-lg">Hair Color: Dark Brown</h5>
              <h5 className="text-base md:text-lg">Suit Size: 38</h5>
            </div>
          </div>
        </div>

        <div className="  ">
          <div className="flex flex-row justify-between md:justify-end   pt-4 md:pt-3">
            <div className="text-left md:hidden md:block flex flex-col  pt-5 text-[#343434] ">
              <h5 className="text-base md:text-lg">
                Height: 182.88cm / 6&apos;0
              </h5>
              <h5 className="text-base md:text-lg">Waist: 82.5cm</h5>
              <h5 className="text-base md:text-lg">Chest: 91.4cm</h5>
              <h5 className="text-base md:text-lg">Leg: 83.82cm</h5>``
              <h5 className="text-base md:text-lg">Eye Color: Brown</h5>
              <h5 className="text-base md:text-lg">Hair Color: Dark Brown</h5>
              <h5 className="text-base md:text-lg">Suit Size: 38</h5>
            </div>
            <div className="text-left flex flex-col gap-3 pt-5 text-[#343434]">
              {[
                { label: "Polaroids", id: "Polaroids" },
                { label: "Photos", id: "photos" },
                { label: "Videos", id: "videos" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex self-end flex-row gap-1 cursor-pointer group"
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <h5 className="text-base md:text-xl relative overflow-hidden group">
                    <span
                      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
      after:bg-[#343434] after:origin-left after:scale-x-0 
      group-hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      {item.label}
                    </span>
                  </h5>

                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-center"
                  >
                    <path
                      d="M8 2L8 15M8 15L14 9.3125M8 15L2 9.3125"
                      stroke="#343434"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden  lg:block">
        <div className="flex  flex-col absolute left-5 md:left-16 top-32 md:top-24 gap-3 md:gap-1  w-[85%] md:w-[85%] lg:w-[40%]">
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <h1 className="  text-left text-7xl md:text-9xl text-[#343434] lg:text-9xl">
                ÀKÍNWÁLÉ
              </h1>
            </div>
            <div className=" self-end pt-1">
              <h1 className="  text-right text-7xl md:text-9xl text-[#343434] lg:text-9xl">
                ỌLÀÓLÚWÀ
              </h1>
            </div>
            <div className="flex gap-2 self-end flex-row">
              <div className="">
                <a
                  href="https://www.instagram.com/olaoluwa.ak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6116 0.0625H5.38763C3.97564 0.063576 2.6218 0.62496 1.62338 1.62338C0.62496 2.6218 0.063576 3.97564 0.0625 5.38762V12.6116C0.0633608 14.0237 0.62465 15.3777 1.62309 16.3763C2.62154 17.3749 3.9755 17.9364 5.38763 17.9375H12.6116C14.0236 17.9362 15.3775 17.3746 16.3759 16.3761C17.3743 15.3775 17.9356 14.0236 17.9367 12.6116V5.38762C17.936 3.97551 17.3748 2.62142 16.3763 1.62291C15.3778 0.624392 14.0237 0.0631459 12.6116 0.0625ZM16.1394 12.6116C16.1392 13.5471 15.7675 14.4444 15.1059 15.1059C14.4444 15.7675 13.5471 16.1392 12.6116 16.1394H5.38763C4.92438 16.1394 4.46566 16.0482 4.03769 15.8709C3.60971 15.6936 3.22086 15.4337 2.89333 15.1061C2.5658 14.7785 2.30601 14.3896 2.12881 13.9616C1.95161 13.5335 1.86046 13.0748 1.86056 12.6116V5.38762C1.86046 4.92441 1.95161 4.46572 2.12883 4.03775C2.30604 3.60978 2.56584 3.22092 2.89338 2.89338C3.22092 2.56584 3.60978 2.30604 4.03775 2.12883C4.46572 1.95161 4.92441 1.86046 5.38763 1.86056H12.6116C13.5469 1.86078 14.4439 2.23245 15.1053 2.89385C15.7667 3.55526 16.1384 4.45226 16.1386 5.38762L16.1394 12.6116Z"
                      fill="black"
                    />
                    <path
                      d="M9.00041 4.37849C6.45078 4.37849 4.37891 6.45118 4.37891 8.99999C4.37891 11.5488 6.45159 13.6215 9.00041 13.6215C11.5492 13.6215 13.6219 11.5488 13.6219 8.99999C13.6219 6.45118 11.55 4.37849 9.00041 4.37849ZM9.00041 11.8234C8.25158 11.8235 7.53339 11.5262 7.00382 10.9967C6.47424 10.4673 6.17667 9.74922 6.17656 9.00039C6.17645 8.25157 6.47382 7.53338 7.00324 7.0038C7.53266 6.47423 8.25077 6.17666 8.99959 6.17655C9.74842 6.17644 10.4666 6.47381 10.9962 7.00323C11.5258 7.53265 11.8233 8.25076 11.8234 8.99958C11.8235 9.7484 11.5262 10.4666 10.9968 10.9962C10.4673 11.5257 9.74923 11.8233 9.00041 11.8234ZM13.6317 3.30518C13.8506 3.30534 14.0646 3.3704 14.2466 3.49215C14.4286 3.6139 14.5704 3.78687 14.6541 3.98919C14.7379 4.19151 14.7597 4.41412 14.717 4.62886C14.6742 4.84361 14.5687 5.04086 14.4139 5.19569C14.2591 5.35052 14.0618 5.45598 13.8471 5.49873C13.6323 5.54149 13.4097 5.51963 13.2074 5.43591C13.0051 5.35219 12.8321 5.21037 12.7104 5.02838C12.5886 4.84639 12.5236 4.63239 12.5234 4.41343C12.5234 3.80243 12.9378 3.30518 13.6317 3.30518Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.tiktok.com/@olaoluwa.ak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.451 0.707617C12.5764 0.69043 13.6936 0.699367 14.8101 0.69043C14.8472 2.08674 15.4137 3.34349 16.315 4.27437L16.3137 4.27299C17.2837 5.14681 18.546 5.7133 19.9375 5.80955L19.9567 5.81093V9.27318C18.6422 9.24018 17.4061 8.93699 16.2917 8.41587L16.348 8.43924C15.809 8.18005 15.3532 7.91399 14.9201 7.61699L14.9558 7.64037C14.9476 10.1491 14.9641 12.6577 14.9387 15.1575C14.8678 16.4314 14.4443 17.5933 13.7651 18.5634L13.7788 18.5421C12.6431 20.1687 10.8033 21.2364 8.71129 21.2996H8.70166C8.6171 21.3037 8.51741 21.3058 8.41704 21.3058C7.22766 21.3058 6.11597 20.9744 5.1686 20.399L5.1961 20.4148C3.47185 19.3774 2.28247 17.6022 2.06247 15.5377L2.05972 15.5095C2.04254 15.0798 2.03429 14.6501 2.05147 14.2294C2.38835 10.9438 5.1411 8.40212 8.48716 8.40212C8.86322 8.40212 9.23172 8.43443 9.58991 8.49562L9.55141 8.49012C9.5686 9.7613 9.51704 11.0332 9.51704 12.3044C9.22622 12.1992 8.89072 12.138 8.54079 12.138C7.25654 12.138 6.1641 12.9589 5.75985 14.1049L5.75366 14.1256C5.66222 14.4191 5.60929 14.7567 5.60929 15.1059C5.60929 15.2476 5.61822 15.3878 5.63472 15.5253L5.63335 15.5088C5.8616 16.9154 7.06747 17.9769 8.52154 17.9769C8.56347 17.9769 8.60472 17.9762 8.64597 17.9742H8.63979C9.6456 17.9439 10.5187 17.4029 11.0123 16.6033L11.0192 16.5909C11.2028 16.3352 11.3286 16.0258 11.3705 15.6896L11.3712 15.68C11.4572 14.1421 11.4228 12.6131 11.431 11.0751C11.4393 7.61287 11.4228 4.15887 11.4482 0.705555L11.451 0.707617Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.48066 14.5438C8.90389 17.5667 8.20002 20.4647 6.11423 21.9785C5.46987 17.4096 7.05929 13.9782 7.79745 10.3352C6.53877 8.2172 7.94861 3.95444 10.6027 5.00456C13.8683 6.29646 7.77493 12.8798 11.8651 13.7022C16.1364 14.5604 17.8802 6.29109 15.2321 3.60219C11.4051 -0.280985 4.09268 3.51376 4.99167 9.07331C5.21039 10.4322 6.61439 10.8445 5.55293 12.7207C3.10367 12.1771 2.37303 10.2457 2.46683 7.67042C2.61851 3.45485 6.25414 0.503796 9.90146 0.0953351C14.5137 -0.420891 18.8424 1.78822 19.4401 6.12712C20.1135 11.0246 17.3586 16.3284 12.4263 15.9467C11.0894 15.8427 10.5281 15.1801 9.48066 14.5438Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row justify-between pt-0 md:pt-3">
              <div className="text-left flex flex-col  pt-5 text-[#343434] ">
                <h5 className="text-base md:text-lg">
                  Height: 182.88cm / 6&apos;0
                </h5>
                <h5 className="text-base md:text-lg">Waist: 82.5cm</h5>
                <h5 className="text-base md:text-lg">Chest: 91.4cm</h5>
                <h5 className="text-base md:text-lg">Leg: 83.82cm</h5>
                <h5 className="text-base md:text-lg">Eye Color: Brown</h5>
                <h5 className="text-base md:text-lg">Hair Color: Dark Brown</h5>
                <h5 className="text-base md:text-lg">Suit Size: 38</h5>
              </div>
              <div className="text-left flex flex-col gap-3 pt-5 text-[#343434]">
                {[
                  { label: "Polaroids", id: "Polaroids" },
                  { label: "Photos", id: "photos" },
                  { label: "Videos", id: "videos" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex self-end flex-row gap-1 cursor-pointer group"
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <h5 className="text-base md:text-xl relative overflow-hidden">
                      <span
                        className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                      after:bg-[#343434] after:origin-left after:scale-x-0 
                      group-hover:after:scale-x-100 after:transition-transform after:duration-300"
                      >
                        {item.label}
                      </span>
                    </h5>

                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="self-center"
                    >
                      <path
                        d="M8 2L8 15M8 15L14 9.3125M8 15L2 9.3125"
                        stroke="#343434"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex absolute bottom-64 md:bottom-4 right-16 -z-10 flex-row-reverse gap-4">
            <div className="  aspect-[2/3] w-[50%] md:w-[40%] bg-black ">
              <Image
                src="/images/67.webp"
                alt="Hmm"
                width={800}
                height={800}
                className="object-cover bg-black"
              />
            </div>
            <div className=" w-[15%] flex flex-col gap-4 self-center ">
              <Image
                src="/images/49.webp"
                alt="Hmm"
                width={800}
                height={800}
                className="object-cover aspect-square w-40 bg-black"
              />
              <Image
                src="/images/69.webp"
                alt="Hmm"
                width={800}
                height={800}
                className="object-cover aspect-square w-40 bg-black"
              />
              <Image
                src="/images/44.webp"
                alt="Hmm"
                width={800}
                height={800}
                className="object-cover aspect-square w-40 bg-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
