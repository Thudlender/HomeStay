import api from "./api";
const HOMESTAY_API_URL = import.meta.env.VITE_HOMESTAY_API_URL;
console.log(HOMESTAY_API_URL);

//get all financial record
const getAllHomestayRecords = async () => {
    return await api.get(`${HOMESTAY_API_URL}`);
};
//get all financial record by userId
const getAllHomestayRecordsByUserId = async (userId) => {
    return await api.get(`${HOMESTAY_API_URL}/user/${userId}`);
};
//get a financial record by id
const getHomestayRecordById = async (id) => {
    return await api.get(`${HOMESTAY_API_URL}/${id}`);
};
//create a new record
const createHomestayRecord = async (record) => {
    return await api.post(`${HOMESTAY_API_URL}`, record);
};
//update a record
const updateHomestayRecord = async (id, record) => {
    return await api.put(`${HOMESTAY_API_URL}/${id}`, record);
};
//delete a record
const deleteHomestayRecord = async (id) => {
    return await api.delete(`${HOMESTAY_API_URL}/${id}`);
};
const HomestayService = {
    getAllHomestayRecordsByUserId,
    getAllHomestayRecords,
    getHomestayRecordById,
    createHomestayRecord,
    updateHomestayRecord,
    deleteHomestayRecord,
};

export default HomestayService;
