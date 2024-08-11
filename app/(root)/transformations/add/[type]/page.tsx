import React from "react"
import Header from "@/components/Shared/Header"
import { transformationTypes } from "@/constants"
import { auth } from "@clerk/nextjs/server"
import TransformationForm from "@/components/Shared/TransformationForm"
import { getUserById } from "../../../../../lib/actions/user.actions"
import { redirect } from "next/navigation"

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth()
  const transformation = transformationTypes[type]

  if (!userId) redirect("/sign-in")
  const user = await getUserById(userId)

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  )
}

export default AddTransformationTypePage
