// MentorList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MentorCard from './Mentorcard';
import { Box } from '@mui/material';

const mentors = [
  {
    id: 1,
    name: 'Aravind Sai',
    skills: ['Data Structures', 'Web Development'],
    rating: 4.8,
    imageUrl: 'https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg',
  },
  {
    id: 2,
    name: 'Riya Sharma',
    skills: ['Machine Learning', 'Public Speaking'],
    rating: 4.5,
    imageUrl: 'https://st3.depositphotos.com/1011434/13157/i/450/depositphotos_131572502-stock-photo-happy-woman-smiling.jpg',
  },

  {
    id: 3,
    name:'Priya',
    skills:['Public Speaking','Front end Developement','DSA'],
    rating : 4,
    imageUrl:'https://static.vecteezy.com/system/resources/previews/038/962/461/non_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg'
  },

  {
    id: 4,
    name: 'Priyanshu',
    skills: ['Machine Learning', 'Web Development'],
    rating: 2,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    id: 5,
    name: 'Sirisha',
    skills: ['Deep Learning', 'Gen AI'],
    rating: 3.5,
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/56bbb9d0d51cd435cfdf796b/1653666086017-P4IYY9SS8SPETN2AUZU9/05-20-22-Delgado-A80A0543-Edit.jpg?format=1500w',
  },
  {
    id: 6,
    name: 'Mike ',
    skills: ['Data Structures', 'Machine Learning'],
    rating: 3,
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/035/314/037/small_2x/ai-generated-professional-man-in-suit-standing-confidently-in-office-generative-ai-free-photo.jpg',
  },
  {
    id: 7,
    name: 'Divya',
    skills: ['Cloud Computing'],
    rating: 5,
    imageUrl: 'https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?semt=ais_hybrid&w=740',
  },



];

export default function MentorList() {
  const navigate = useNavigate();

  const handleBook = (mentor) => {
    navigate('/book', { state: { mentor } });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', p: 3 }}>
      {mentors.map((mentor) => (
        <MentorCard
          key={mentor.id}
          name={mentor.name}
          skills={mentor.skills}
          rating={mentor.rating}
          imageUrl={mentor.imageUrl}
          onBook={() => handleBook(mentor)}
        />
      ))}
    </Box>
  );
}
