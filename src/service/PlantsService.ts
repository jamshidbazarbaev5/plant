import axios from "axios";

const baseURL = 'https://agroai.social'

interface ClassifyPlantRes {
    id: number;
    username: string;
    image: string;
    plant_name: string;
    plant_label: string;
    is_healthy: boolean;
    created_at: string;
}



export const ClassifyPlant = async (formData: FormData) => {
    const token = localStorage.getItem("access");
    if (token) {
        try {
            const response = await axios.post<ClassifyPlantRes>(`${baseURL}/api/users`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // FormData uchun header
                    'Authorization': `Bearer ${token}`, // Agar token kerak bo'lsa
                },
            });
            return response.data;
        } catch (error) {
            console.error("O'simlikni klassifikatsiya qilishda xatolik:", error);
            throw error; // Xatolikni keyingi zanjirga uzatish
        }
    } else {
        console.warn("Token topilmadi!");
        return null;
    }
};


interface GetHistory {
    count: number;
    next: string | number | null;
    previous: string | number | null;
    results: [
        {
            id: number,
            username: string,
            image: string,
            plant_name: string,
            plant_label: string, 
            is_healthy: boolean, 
            created_at: string,
        } 
    ]
}

interface PlantReport {
    summary: {
      total_uploads: number;
      healthy_plants: number;
      diseased_plants: number;
    };
    common_diseases: {
      disease: string;
      count: number;
    }[];
    plant_distribution: {
      plant_type: string;
      total: number;
      healthy: number;
      diseased: number;
    }[];
    hourly_uploads: {
      hour: string; 
      total: number;
      healthy: number;
      diseased: number;
    }[];
  }

interface ClassifyPlantReq {
    mode: string;
    formdata: [
        {
            key: string,
            type: string,
            src: string
        }
    ]
}

// export const ClassifyPlant = async (credentials: ClassifyPlantReq) => {
//     const token = localStorage.getItem("access")
//     if(token) {
//         try {
//             const response = await axios.post<ClassifyPlantRes>(`${baseURL}/api/users`, credentials)
//             return response.data
//         }
//         catch(error) {
//             console.error(error);
//         }
//     }
// }

export const getHistory = async () => {
    const token = localStorage.getItem("access")
    if(token) {
        try {
            const response = await axios.get<GetHistory>(`${baseURL}/api/users`)
            return response.data
        }
        catch(error) {
            console.error(error);
        }
    }
}

export const getDashboard = async () => {
    const token = localStorage.getItem("access")
    if(token) {
        try {
            const response = await axios.get<PlantReport>(`${baseURL}/api/users`)
            return response.data
        }
        catch(error) {
            console.error(error);
        }
    }
}