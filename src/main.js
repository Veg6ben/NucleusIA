import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai' 

const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_KEY,
})


const form = document.querySelector('#form')
const app = document.querySelector('#app')  
const sendButton = document.querySelector('#send')

form.addEventListener('submit', async e =>{
  e.preventDefault()

  const prompt = document.querySelector('#prompt').value

  if(prompt === ''){
    alert('Please enter a prompt')
    return
  }
  sendButton.disabled = true
  const result = await streamText({
     //model: openrouter('openai/gpt-oss-20b:free'),
     //model: openrouter('deepseek/deepseek-r1-distill-qwen-7b'),
    //model: openrouter('google/gemini-2.5-pro-exp-03-25'),
    //model: openrouter('openai/gpt-oss-20b:free'),
    //model: openrouter('z-ai/glm-4.5-air:free'),
    model: openrouter('qwen/qwen3-coder:free'),
    prompt: prompt,
    
  })
  
  while (app.firstChild) {
    app.removeChild(app.firstChild)
  }
  
  for await (const text of result.textStream) {
    app.append(text)
  }
  
  sendButton.disabled = false
})
  

  

