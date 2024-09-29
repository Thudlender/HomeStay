import { createContext, useContext, useEffect, useState } from "react";
import HomestayService from "../services/homestay.service";
// import { useUser } from "@clerk/clerk-react";
export const useHomestayRecordContext = createContext();

export const useHomestayRecordProvider = ({ children }) => {
    const [records, setRecords] = useState([]);
    const { user } = useUser();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const [selectedMonth, setSelectedMonth] = useState(
      months[new Date().getMonth()]
    );
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    useEffect(() => {
      const fetchRecords = async () => {
        if (!user) return;
        try {
          const response = await HomestayService.getAllHomestayRecordsByUserId(
            user.id
          );
          if (response.status === 200) {
            setRecords(response.data);
          }
        }catch (error) {
          console.log(error);
        }
    };
    fetchRecords();
    }, [user]);

    const addRecord = async (record) => {
      try {
        const response = await HomestayService.createHomestayRecord(record);

        if (response.status === 200) {
          setRecords((prev) => [...prev, response.data]);
        }
      }catch (error) {
        console.log(error);
      }
    };
    
    const updateRecord = async (id, newRecord) => {
      try {
        const response = await HomestayService.updateHomestayRecord(
          id,
          newRecord
        );
        if (response.status === 200) {
          setRecords((prev) => 
            prev.map((record) => {
              if (record.id === id) {
                return newRecord;
              } else {
                return record;
              }
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getHomestayRecordById = async (id) => {
      try {
        const response = await HomestayService.getHomestayRecordsById(id);
        if (response.status === 200) {
          return response;
        } else {
          return null;
        }
      }catch (error) {
        console.log(error);
      }
    };

    const deleteRecord = async (id) => {
      try {
        const response = await HomestayService.deleteHomestayRecord(id);
        if (response.status === 200) {
          setRecords((prev) => prev.filter((record) => record.id !== id));
        }
      }catch (error) {
        console.log(error);
      }
    };
    return (
      <HomestayRecordContext.Provider
        value={{
          records,
          months,
          selectedMonth,
          setSelectedMonth,
          selectedYear,
          setSelectedYear,
          addRecord,
          updateRecord,
          deleteRecord,
          getFinancialRecordById,
        }}
      >
        {children}
        </HomestayRecordContext.Provider>
    );
};
export const useHomestayRecord = () => useContext(HomestayRecordProvider);