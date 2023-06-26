

const useSelectedClass = async ({params}) => {
    
        const response = await fetch(`https://music-instrument-learning-server-himlaoy.vercel.app/dashboard/payment/${params.id}`)
        const data = await response.json()
        console.log(params.id)
        return data
};

export default useSelectedClass;