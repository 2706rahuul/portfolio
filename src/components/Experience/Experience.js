import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section" style={{ color: "white"}}>
      <Particle />
      <Container>
        <h1 className="work-experience-heading">
          <strong className="purple">Work Experience</strong>
        </h1>
        <br></br>
        <br></br>
        <br></br>

        <div className="work-experience-item" style={{ justifyContent: "center", paddingBottom: "10px", marginBottom:"35px" }}>
          <h3>Researcher</h3>
          <p>
            <strong>Company:</strong> USC Information Sciences Institute
          </p>
          <p style={{ marginTop: "-16px" }}>
            <strong>Duration:</strong> September 2023 - Present
          </p>
          <ul style={{textAlign:"left"}}>
            <li>Research in collaboration with Prof. Benjamin Nye.</li>
            <li>Conducting prompt engineering via ChatGPT-3.5 to generate baseline prompts, which would be used to evaluate and score issues in college essays.</li>
            <li> Architected a Python script to automate the prompt generation and scoring process, which seamlessly integrates with the ChatGPT API.</li>
          </ul>
        </div>

        <div className="work-experience-item" style={{ justifyContent: "center", paddingBottom: "10px", marginBottom:"35px" }}>
          <h3>Project Intern</h3>
          <p>
            <strong>Company:</strong> L3Cube Pune
          </p>
          <p style={{ marginTop: "-16px" }}>
            <strong>Duration:</strong> June 2022 - June 2023
          </p>
          <ul style={{textAlign:"left"}}>
            <li>Led creation of Marathi’s largest sentiment analysis dataset, L3Cube-MahaSentMD., consisting of approximately 60000 training examples. Research published at 2023 International Conference on Machine Learning (ICML).</li>
            <li>Innovated data augmentation methods for increase in model accuracy for sentiment analysis models. Pioneered named entity masking with BERT, back-translation and GPT-based sentence/sentiment prediction for data augmentation.</li>
            <li>Led English, Hindi, and Gujarati news summarization: Fine-tuned PEGASUS, BRIO, IndicBART. Achieved top 3 ranks in ILSUM 2022 at FIRE 2022, Kolkata, for all 3 languages.</li>
          </ul>
        </div>

        <div className="work-experience-item" style={{ justifyContent: "center", paddingBottom: "10px", marginBottom:"35px" }}>
          <h3>Undergraduate Research Assistant</h3>
          <p>
            <strong>Company:</strong> Pune Institute of Computer Technology
          </p>
          <p style={{ marginTop: "-16px" }}>
            <strong>Duration:</strong> October 2021 - May 2023
          </p>
          <ul style={{textAlign:"left"}}>
            <li>Mentored 5 juniors to conduct research in the field of Natural Language Processing.</li>
            <li>Came 1st at DravidianLangTech, a workshop in association with ACL 2022, for our research on Neural Machine Translation in Dravidian Languages.</li>
            <li>Performed research on abstractive document summarization on medical literature reviews; published research at the 3rd Workshop on Scholarly Document Processing in affiliation with COLING 2022.</li>
            <li>Devised unsupervised approaches to neural machine translation in German and Sorbian variant languages; research published at the Workshop on Machine Translation (WMT) in affiliation with EMNLP 2022.</li>
            <li>Achieved state-of-the-art accuracies in image captioning for static image data in Marathi, Gujarati, Tamil and Kannada by devising attention-based merge architecture models; Research work published at the International Conference on Computer Graphics and Image Processing (CGIP 2023).</li>
          </ul>
        </div>

        <div className="work-experience-item" style={{ justifyContent: "center", paddingBottom: "10px", marginBottom:"35px" }}>
          <h3>Machine Learning Intern</h3>
          <p>
            <strong>Company:</strong> ResoluteAI.in
          </p>
          <p style={{ marginTop: "-16px" }}>
            <strong>Duration:</strong> October 2021 - January 2022
          </p>
          <ul style={{textAlign:"left"}}>
            <li>Built a staff productivity analysis system to estimate the efficiency of onloading and offloading from trucks docks via real-time video feed, and supplemented by data analysis powered using BI tools. System achieved an accuracy of 97%.</li>
            <li>Led successfully a team of 5 co-interns for a textile-based computer vision project, which consisted creating a ML pipeline for extensive data annotation and model tweaking, which achieved an accuracy of 96%.</li>
          </ul>
        </div>

        <div className="work-experience-item" style={{ justifyContent: "center", paddingBottom: "10px", marginBottom:"35px" }}>
          <h3>Development Intern</h3>
          <p>
            <strong>Company:</strong> iMocha
          </p>
          <p style={{ marginTop: "-16px" }}>
            <strong>Duration:</strong> September 2022 - Jan 2023
          </p>
          <ul style={{textAlign:"left"}}>
            <li>Developed and implemented an interview assessment system for spoken answers using ML algorithms.
</li>
            <li>Leveraged Azure platform to train a LUIS model using input derived from speech-to-text conversion using AssemblyAI for evaluation.
</li>
            <li>Performed migration of the codebase from LUIS to CLU in response to the announced replacement of LUIS with Azure's new CLU.</li>
          </ul>
        </div>

        <div className="work-experience-item" style={{ justifyContent: "center", paddingBottom: "10px", marginBottom:"35px" }}>
          <h3>NLP Research Intern</h3>
          <p>
            <strong>Company:</strong> Indian Institute of Information Technology, Allahabad
          </p>
          <p style={{ marginTop: "-16px" }}>
            <strong>Duration:</strong> June 2022 - August 2022
          </p>
          <ul style={{textAlign:"left"}}>
            <li>Worked under Prof. Uma Shanker Tiwary for creating a corpus in Hindi Language for Named Entity Recognition (NER), the biggest and cleanest of its kind.</li>
            <li>Scraped the entire Hindi Wikipedia article database in Hindi to get numerous entities.</li>
            <li>Developed a mechanism for incorporating Wikidata Query Service with the extracted entities for making the entity tagging process automated and faster.</li>
          </ul>
        </div>

        {/* Add more work experience items as needed */}
      </Container>
    </Container>
  );
}

export default Experience;
