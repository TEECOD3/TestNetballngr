// import imgbg from "../images/img1.jpg";
// import Faq from "./Faq";

// import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
// import { LoginSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { athleteSchema, gurdianSchema } from "./schema";
import { useEffect } from "react";

// {
//   openNav, setOpenNav;
// }
const Registration = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(athleteSchema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { isSubmitSuccessful: isSubmitSuccessful2, errors: errors2 },
  } = useForm({
    resolver: yupResolver(gurdianSchema),
  });

  const submithandlerreq = async (data) => {
    window.location.href = "mailto:temi236topemicheal@gmail.com";
    alert("hey");
    console.log(data);
  };

  const submithandlerguard = async (data) => {
    window.location.href = "mailto:temi236topemicheal@gmail.com";
    alert("hey");
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    if (isSubmitSuccessful2) {
      reset2();
    }
  }, [reset, isSubmitSuccessful, reset2, isSubmitSuccessful2]);
  return (
    <div>
      {/* className={openNav ? "open" : "close"} */}
      <div>
        <div className=" h-96  w-full m-auto  relative group font-yabari  overflow-hidden  ">
          <div
            // style={{ backgroundImage: `url(${imgbg})` }}
            className=" w-full h-full bg-center   flex  items-center justify-center  bg-cover "
          >
            <div className="absolute bg-green-950 opacity-80 w-full p-[100%]"></div>
            <span className="md:text-xl lg:text-4xl font-yabari text-green-600 text-center flex min-[100px]:text-2xl  flex-col items-center justify-between">
              <h1 className="drop-shadow-2xl">Registration</h1>
            </span>
          </div>
        </div>
        <div className="   w-full m-auto  relative group font-yabari  overflow-hidden  bg-white">
          <div>
            <div className=" absolute lg:top-10 md:top-8 min-[100px]:top-5 flex items-center justify-between w-full">
              <span className="lg:p-2 lg:px-12 lg:mr-2 bg-green-950 md:p-2 md:px-12 md:mr-1  min-[100px]:p-1  min-[100px]:px-4"></span>
              <span className=" text-green-950 lg:text-sm  md:text-xs min-[100px]:text-md m-2 ">
                REGISTRATION
              </span>
              <span className=" bg-green-950  md:p-2 flex grow min-[100px]:p-1"></span>
            </div>

            <section
              className="lg:px-16 lg:flex  lg:flex-row sm:flex-col"
              data-aos="fade-up"
            >
              <div className=" container px-10 md:py-2 lg:pt-24 mx-auto mt-20 -m-2">
                <span className="lg:text-3xl text-green-950 min-[100px]:text-2xl uppercase  ">
                  Scouting requirements
                </span>
              </div>

              <form
                onSubmit={handleSubmit(submithandlerreq)}
                className="flex w-full flex-col justify-center px-6 py-6 sm:px-10 mt-16"
              >
                <div className="flex flex-col gap-y-5 w-full ">
                  <div className="flex w-full flex-col lg:flex-row gap-x-3">
                    <div className=" w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="firstname"
                        className="text-base font-semibold capitalize"
                      >
                        firstname
                      </label>
                      <input
                        type="text"
                        id="text"
                        className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter your firstname.."
                        {...register("firstname")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.firstname?.message}
                      </p>
                    </div>
                    <div className=" w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="lastname"
                        className="text-base font-semibold capitalize"
                      >
                        lastname
                      </label>
                      <input
                        type="text"
                        id="text"
                        className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter your lastname.."
                        {...register("lastname")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.lastname?.message}
                      </p>
                    </div>
                  </div>
                  {/* 
                  height and passport */}
                  <div className="flex w-full flex-col lg:flex-row gap-x-3">
                    <div className=" w-full flex flex-col  ">
                      <label
                        htmlFor="height"
                        className="text-base font-semibold capitalize"
                      >
                        height
                      </label>
                      <input
                        type="number"
                        id="text"
                        className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter your height.."
                        {...register("height")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.height?.message}
                      </p>
                    </div>
                    <div className=" flex flex-col  w-1/2">
                      <label
                        htmlFor="passport"
                        className="text-base font-semibold capitalize"
                      >
                        passport photograph
                      </label>
                      <input
                        type="file"
                        id="passportphotograph"
                        className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2  border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter your lastname.."
                        {...register("passport")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.passport?.message}
                      </p>
                    </div>
                  </div>
                  {/* valid means of id and state of origin */}
                  <div className="flex w-full flex-col lg:flex-row gap-x-3">
                    <div className="w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="validmeansofid"
                        className=" font-semibold capitalize text-sm"
                      >
                        valid means of identification
                      </label>
                      <input
                        type="file"
                        id="text"
                        className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter your valid means of identification.."
                        {...register("validmeansofid")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.validmeansofid?.message}
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="stateoforigin"
                        className="text-base font-semibold capitalize"
                      >
                        state of origin
                      </label>
                      <input
                        type="text"
                        id="stateoforigin"
                        className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 file:bg-green-700 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter your state of origin.."
                        {...register("state")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.state?.message}
                      </p>
                    </div>
                  </div>

                  {/* proof of enrolement/school attendance and fitness report */}

                  <div className="flex w-full flex-col lg:flex-row gap-x-3">
                    <div className=" w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="stateofresidence"
                        className="font-semibold capitalize text-sm"
                      >
                        state of residence
                      </label>
                      <input
                        type="text"
                        id="stateofresidence"
                        className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter proof of enrolment / school attendance.."
                        {...register("stateOfResidence")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.stateOfResidence?.message}
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="fitnessReport"
                        className="text-base font-semibold capitalize"
                      >
                        fitness report
                      </label>
                      <input
                        type="file"
                        id="fitnessReport"
                        className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2  border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        {...register("fitnessReport")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.fitnessReport?.message}
                      </p>
                    </div>
                  </div>

                  {/* email address and sportmanship history */}
                  <div className="flex w-full flex-col lg:flex-row gap-x-3">
                    <div className=" w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="email"
                        className="font-semibold capitalize text-sm"
                      >
                        email
                      </label>
                      <input
                        type="email"
                        id="stateofresidence"
                        className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter proof of enrolment / school attendance.."
                        {...register("emailAddress")}
                      />
                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.emailAddress?.message}
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                      <label
                        htmlFor="sportmanshiphistory"
                        className="text-base font-semibold capitalize"
                      >
                        sportmanship history
                      </label>
                      <input
                        type="text"
                        id="sportmanshiphistory"
                        className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800  border-b-2 border-black placeholder:text-[7px] bg-transparent !appearance-none autofill:!bg-transparent "
                        placeholder="Enter your sports history.(atheletics, basketball, handball etc...)"
                        {...register("sportsHistory")}
                      />

                      <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                        {errors.sportsHistory?.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <button
                    type="submit"
                    className="py-2 text-base font-semibold capitalize bg-transparent border-b-2 border-black w-20"
                  >
                    submit
                  </button>
                </div>
              </form>
            </section>
          </div>
          {/* second form */}
          <section
            className="lg:px-16 lg:flex  lg:flex-row sm:flex-col"
            data-aos="fade-up"
          >
            <div className=" container px-10 md:py-2 mx-auto mt-10 -m-2 mb-10">
              <span className="lg:text-3xl text-green-950 min-[100px]:text-2xl uppercase  ">
                agent or guardian details
              </span>
            </div>
            <form
              className="flex w-full flex-col justify-center px-6 py-6 sm:px-10 mt-16"
              onSubmit={handleSubmit2(submithandlerguard)}
            >
              <div className="flex w-full flex-col lg:flex-row gap-x-3">
                <div className=" w-full lg:w-1/2 flex flex-col">
                  <label
                    htmlFor="gfirstname"
                    className="text-base font-semibold capitalize"
                  >
                    firstname
                  </label>
                  <input
                    type="text"
                    id="gfirstname"
                    className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                    placeholder="Enter your firstname.."
                    {...register2("guardianfirstname")}
                  />
                  <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                    {errors2.guardianfirstname?.message}
                  </p>
                </div>
                <div className=" w-full lg:w-1/2 flex flex-col">
                  <label
                    htmlFor="glastname"
                    className="text-base font-semibold capitalize"
                  >
                    lastname
                  </label>
                  <input
                    type="text"
                    id="glastname"
                    className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                    placeholder="Enter guardians lastname.."
                    {...register2("guardianlastname")}
                  />
                  <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                    {errors2.guardianlastname?.message}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col lg:flex-row gap-x-3">
                <div className=" w-full lg:w-1/2 flex flex-col">
                  <label
                    htmlFor="contactaddress"
                    className="text-base font-semibold capitalize"
                  >
                    contactaddress
                  </label>
                  <input
                    type="text"
                    id="contactaddress"
                    className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                    placeholder="Enter your contact address.."
                    {...register2("contactAddress")}
                  />
                  <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                    {errors2.contactAddress?.message}
                  </p>
                </div>
                <div className=" w-full lg:w-1/2 flex flex-col">
                  <label
                    htmlFor="contactNumber"
                    className="text-base font-semibold capitalize"
                  >
                    contactNumber
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                    placeholder="Enter contactNumber.."
                    {...register2("contactNumber")}
                  />
                  <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                    {errors2.contactNumber?.message}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col lg:flex-row gap-x-3">
                <div className=" w-full lg:w-1/2 flex flex-col">
                  <label
                    htmlFor="guardianEmail"
                    className="text-base font-semibold capitalize"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="text"
                    className="mt-2 px-4 py-2 focus:border-none focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                    placeholder="Enter guardian's Email.."
                    {...register2("guardianEmail")}
                  />
                  <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                    {errors2.guardianEmail?.message}
                  </p>
                </div>
                <div className=" w-full lg:w-1/2 flex flex-col">
                  <label
                    htmlFor="consent"
                    className="text-base font-semibold capitalize"
                  >
                    consent Letter
                  </label>
                  <input
                    type="file"
                    id="text"
                    className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 border-black bg-transparent !appearance-none autofill:!bg-transparent "
                    placeholder="Enter your lastname.."
                    {...register2("consentletter")}
                  />
                  <p className="mt-2 text-[0.7rem] font-bold text-red-500">
                    {errors2.consentletter?.message}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="py-2 text-base font-semibold capitalize bg-transparent border-b-2 border-black w-20"
                >
                  submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Registration;

//  <select
//    placeholder="your sport hitory"
//    className="text-black bg-green-600 border-b-2 border-black py-2 appearance-none focus:border-none"
//    name="sport history"
//    id="sportmanshiphistory"
//    // className="mt-2 px-4 py-2 focus:border-b-2 focus:outline-none font-light placeholder:text-green-800 placeholder:text-[10px] border-b-2 file:bg-green-700 border-black bg-transparent !appearance-none autofill:!bg-transparent "
//    {...register("sportsHistory")}
//  >
//    <option value="volvo">Volvo</option>
//    <option value="saab">Saab</option>
//    <option value="mercedes">Mercedes</option>
//    <option value="audi">Audi</option>
//  </select>;
