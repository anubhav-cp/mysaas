"use client"


import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import axios from "axios";

const FormBoard = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        setIsLoading(true)

            if(isLoading) return

        try {
            const data = await axios.post('api/board', { name })
            console.log(data)

            setName('')
            toast.success('Board Created Successfully')

            router.refresh()
            
        } catch (error) {
            const errorMessage = error.response?.data?.error || error.message || "something went wrong"
            toast.error(errorMessage)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }
  return (
    <form className="bg-base-100 p-8 rounded-3xl space-y-8" onSubmit={handleSubmit}>
      <h2 className="font-bold text-lg">Create a new feedback form</h2>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Board name </span>
        </div>
        <input
        required
          type="text"
          placeholder="Apple Inc."
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => {
            const name = event.target.value
            setName(name)
          }}
        />
      </label>
      <button className="btn btn-primary btn-block" type="submit">{isLoading && <span className="loading loading-spinner loading-xs"></span>}Create Board
      
      </button>
      
    </form>
  );
};

export default FormBoard;
