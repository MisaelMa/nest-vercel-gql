import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

const authors: Author[] = [
  { id: 1, name: 'Kamil', email: 'kamil@kamil' },
  { id: 2, name: 'Jacek', email: 'jacek@jacek' },
  { id: 3, name: 'Adam', email: 'adam@adam' },
  { id: 4, name: 'Piotr', email: 'piotr@piotr' },
  { id: 5, name: 'Tomasz', email: 'tomasz@tomasz' },
  { id: 6, name: 'Krzysztof', email: 'krzysztof@krzysztof' },
];
@Injectable()
export class AuthorsService {
  /*create(createAuthorInput: CreateAuthorInput) {
    return 'This action adds a new author';
  }
  */
  findAll() {
    return authors;
  }

  findOne(id: number) {
    const author = authors.find((author) => author.id === id);
    if (!author) {
      throw new Error('Author not found');
    }
    return author;
  }

  /*  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  } */
}
