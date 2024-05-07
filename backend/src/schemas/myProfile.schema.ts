import { Address } from '@src/models/address.model';
import { User } from '@src/models/user.model';

export interface MyProfile
  extends Pick<User, 'email' | 'nickname' | 'gender' | 'birth' | 'picture_url'>,
    Pick<Address, 'latitude' | 'longtitude' | 'detail'> {
  tag: number[];
}
