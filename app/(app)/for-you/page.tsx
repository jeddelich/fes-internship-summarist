"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import getSelectedBook from "@/api/selected-book";

type Book = {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
};

export default function dashboard() {
  const { user, loading } = useAuth();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!selectedBook) {
      async function fetchBooks() {
        setSelectedBook(await getSelectedBook());
      }
      fetchBooks();
    } else {
      console.log(selectedBook);
    }
  }, [selectedBook]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {selectedBook && (
        <div className="absolute top-0 right-0">{selectedBook.title}</div>
      )}
    </>
  );
}
