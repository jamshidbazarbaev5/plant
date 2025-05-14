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

export const ClassifyPlant = async (input: FormData | ClassifyPlantReq) => {
    const token = localStorage.getItem("access");
    if (token) {
        try {
            const headers: any = {
                'Authorization': `Bearer ${token}`,
            };
            
            // If input is FormData, set appropriate content type
            if (input instanceof FormData) {
                headers['Content-Type'] = 'multipart/form-data';
            }
            
            const response = await axios.post<ClassifyPlantRes>(
                `${baseURL}/api/plants/predict/`,
                input,
                { headers }
            );
            return response.data;
        } catch (error) {
            console.error("Error classifying plant:", error);
            throw error;
        }
    } else {
        console.warn("Token not found!");
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

export const getHistory = async () => {
    const token = localStorage.getItem("access")
    if(token) {
        try {
            const response = await axios.get<GetHistory>(
                `${baseURL}/api/plants/history/`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
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
            const response = await axios.get<PlantReport>(
                `${baseURL}/api/users`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            return response.data
        }
        catch(error) {
            console.error(error);
        }
    }
}