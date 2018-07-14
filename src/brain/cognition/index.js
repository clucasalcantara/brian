import natural from 'natural'
import { elementsClassification } from '../knowledge'

const Bayes = new natural.BayesClassifier()

const classifySubjects = (input) => {
  const classification = Bayes.classify(input)
  
  if (!classification) return `Sorry, but I don't understand what you've said.`

  return classification
}

const train = (newKnowledge = null) => {
  let trainingContext = elementsClassification

  if (newKnowledge) {
    newKnowledge.map(token => trainingContext.push(token))
  }

  trainingContext.map(token => Bayes.addDocument(token.input, token.class))
  
  return Bayes.train()
}

export {
  train,
  classifySubjects,
}