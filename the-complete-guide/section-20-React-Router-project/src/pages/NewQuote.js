import { useEffect } from "react"
import { useHistory } from "react-router"

import QuoteFrom from "../components/quotes/QuoteForm"

import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api"

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote)
  const history = useHistory()

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes")
    }
  }, [status, history])

  const addQuoteHandler = data => {
    sendRequest(data)
  }

  return (
    <QuoteFrom isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote
