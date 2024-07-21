import HeaderBox from '@/components/ui/HeaderBox'
import RighSideBar from '@/components/ui/RighSideBar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = { firstName: 'John', lastName: 'Doe', email: 'john@doe.com' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext= "Access and manage your account and transaction efficiently."
          />
        </header>

        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />

      </div>

      <RighSideBar user={loggedIn} transactions={[]} banks={[{
      "$id": "bank_001",
      "accountId": "acc_001",
      "bankId": "bank_123",
      "accessToken": "token_abc123",
      "fundingSourceUrl": "https://fundingsource.example.com",
      "userId": "user_12345",
      "sharableId": "sharable_001",
      "id": "acc_001",
      "availableBalance": 5000.0,
      "currentBalance": 5200.0,
      "officialName": "Checking Account",
      "mask": "1234",
      "institutionId": "inst_001",
      "name": "My Checking",
      "type": "depository",
      "subtype": "checking",
      "appwriteItemId": "appwrite_item_001"
    },
    {
      "$id": "bank_002",
      "accountId": "acc_002",
      "bankId": "bank_456",
      "accessToken": "token_xyz456",
      "fundingSourceUrl": "https://fundingsource.example.com",
      "userId": "user_12345",
      "sharableId": "sharable_002",
      "id": "acc_002",
      "availableBalance": 10000.0,
      "currentBalance": 10200.0,
      "officialName": "Savings Account",
      "mask": "5678",
      "institutionId": "inst_002",
      "name": "My Savings",
      "type": "depository",
      "subtype": "savings",
      "appwriteItemId": "appwrite_item_002"
    }]} />
    </section>
  )
}

export default Home