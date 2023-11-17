import injectable from './../assets/images/conditioning/injectable.png';
import cp from './../assets/images/conditioning/cp.jpg';
import gel from './../assets/images/conditioning/gel.jpg';
import pommade from './../assets/images/conditioning/pommade.jpg';
import sirop from './../assets/images/conditioning/sirop.jpg';
import solute from './../assets/images/conditioning/solute.jpg';
import suppositoire from './../assets/images/conditioning/suppositoire.jpg';


const ProductsList = () => {
    return (  
        <>
            <span className="mx-3 mb-2 text-sm font-bold raleway">Liste de produits</span>
            <div className="border-2 w-80 h-40 rounded-xl text-xs overflow-y-auto">
                <div className='flex border-b-2 border-dashed'>
                    <div className='w-6 mx-4'><img src={cp} alt=""/></div>
                    <div className='font-semibold'>
                        <span >Amoxicillin Capsules BP - 500mg x 21</span>
                        <div className='flex justify-between py-1 text-gray-500'>
                            <span className='italic'>600 f</span>
                            <span>Qt : 2</span>
                        </div>
                    </div>
                </div>
                <div className='flex border-b-2 border-dashed'>
                    <div className='w-6 mx-4'><img src={gel} alt=""/></div>
                    <div className='font-semibold'>
                        <span >Amoxicillin Capsules BP - 500mg x 21</span>
                        <div className='flex justify-between py-1 text-gray-500'>
                            <span className='italic'>600 f</span>
                            <span>Qt : 2</span>
                        </div>
                    </div>
                </div>
                <div className='flex border-b-2 border-dashed'>
                    <div className='w-6 mx-4'><img src={pommade} alt=""/></div>
                    <div className='font-semibold'>
                        <span >Amoxicillin Capsules BP - 500mg x 21</span>
                        <div className='flex justify-between py-1 text-gray-500'>
                            <span className='italic'>600 f</span>
                            <span>Qt : 2</span>
                        </div>
                    </div>
                </div>
                <div className='flex border-b-2 border-dashed'>
                    <div className='w-6 mx-4'><img src={sirop} alt=""/></div>
                    <div className='font-semibold'>
                        <span >Amoxicillin Capsules BP - 500mg x 21</span>
                        <div className='flex justify-between py-1 text-gray-500'>
                            <span className='italic'>600 f</span>
                            <span>Qt : 2</span>
                        </div>
                    </div>
                </div>
                <div className='flex border-b-2 border-dashed'>
                    <div className='w-6 mx-4'><img src={solute} alt=""/></div>
                    <div className='font-semibold'>
                        <span >Amoxicillin Capsules BP - 500mg x 21</span>
                        <div className='flex justify-between py-1 text-gray-500'>
                            <span className='italic'>600 f</span>
                            <span>Qt : 2</span>
                        </div>
                    </div>
                </div>
                <div className='flex border-b-2 border-dashed'>
                    <div className='w-6 mx-4'><img src={suppositoire} alt=""/></div>
                    <div className='font-semibold'>
                        <span >Amoxicillin Capsules BP - 500mg x 21</span>
                        <div className='flex justify-between py-1 text-gray-500'>
                            <span className='italic'>600 f</span>
                            <span>Qt : 2</span>
                        </div>
                    </div>
                </div>
                <div className='flex border-b-2 border-dashed'>
                    <div className='w-6 mx-4'><img src={injectable} alt=""/></div>
                    <div className='font-semibold'>
                        <span >Amoxicillin Capsules BP - 500mg x 21</span>
                        <div className='flex justify-between py-1 text-gray-500'>
                            <span className='italic'>600 f</span>
                            <span>Qt : 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ProductsList;