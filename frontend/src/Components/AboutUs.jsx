import { stud1 } from '../../public/Assets.jsx'
import { CgProfile } from 'react-icons/cg'
function AboutUs() {
return (
    <div className="p-6 h-full bg-gradient-to-b from-slate-300 to-gray-100 shadow-md">
        <h1 className="text-3xl font-bold font-serif mb-6 ml-15  ">About Us</h1>
        <div className="flex flex-wrap items-center  justify-center gap-8 mb-8">
            <div className="text-center">
                <img
                    src={stud1}
                    alt="Student 1"
                    className="w-36 h-36 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold mt-4">Amit Hassan Joy</h2>
                <p className="text-gray-600">B.Sc. in Software Engineering</p>
                <p className="text-gray-600">Shahjalal University of Science and Technology (SUST)</p>
            </div>
            <div className="text-center">
                {/* <img
                    src={stud2}
                    alt="Student 2"
                    className="w-36 h-36 rounded-full mx-auto"
                /> */}
                <CgProfile className="w-36 h-36 rounded-full mx-auto" />
                <h2 className="text-xl font-semibold mt-4">Abu Horayra Niloy</h2>
                <p className="text-gray-600">B.Sc. in Software Engineering</p>
                <p className="text-gray-600">Shahjalal University of Science and Technology (SUST)</p>
            </div>
        </div>
        <div className='md:ml-15 md:mr-15 mb-8 sm:ml-0 sm:mr-0 bg-slate-300 sm:text-sm md:text-md lg:text-lg rounded-xl shadow-2xl'>
            <h2 className="text-2xl ml-3 font-serif font-bold mb-4">Our Motto</h2>
            <p className="text-gray-700 text-center m-3 text-lg font-sans text-wrap sm:text-sm md:text-md lg:text-lg">
            Our prime initiative a pet rental home service, offering pet owners a secure and convenient lodging solution while they travel. By connecting owners with trusted caretakers, it ensures pets receive quality care in a comfortable environment, while also creating earning opportunities for pet hotels and boarding providers. The goal is to build a reliable network that benefits both pets and their owners, promoting stress-free travel and professional pet care.
            </p>
        </div>
    </div>
)
}

export default AboutUs
