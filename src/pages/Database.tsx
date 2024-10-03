import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { RefreshCw, Settings, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const Database: React.FC = () => {
  const { t } = useTranslation();

  // 동적 컬럼 데이터 예시
  const columns = [
    { id: 'name', label: '이름' },
    { id: 'email', label: '이메일' },
    { id: 'role', label: '역할' },
    { id: 'department', label: '부서' },
    { id: 'position', label: '직책' },
    { id: 'joinDate', label: '입사일' },
    { id: 'salary', label: '급여' },
    { id: 'phoneNumber', label: '전화번호' },
    { id: 'address', label: '주소' },
    { id: 'education', label: '학력' },
    { id: 'skills', label: '기술' },
    { id: 'projects', label: '프로젝트' },
    { id: 'performance', label: '성과' },
    { id: 'notes', label: '비고' },
  ];

  // 동적 행 데이터 예시
  const rows = [
    {
      name: '홍길동',
      email: 'hong@example.com',
      role: '관리자',
      department: '인사팀',
      position: '팀장',
      joinDate: '2020-01-01',
      salary: '5,000,000원',
      phoneNumber: '010-1234-5678',
      address: '서울시 강남구',
      education: '대학교 졸업',
      skills: 'Java, Python',
      projects: '인사관리 시스템 개발',
      performance: '우수',
      notes: '리더십 훈련 필요',
    },
    {
      name: '김철수',
      email: 'kim@example.com',
      role: '사용자',
      department: '개발팀',
      position: '주임',
      joinDate: '2021-03-15',
      salary: '4,500,000원',
      phoneNumber: '010-2345-6789',
      address: '경기도 성남시',
      education: '대학원 졸업',
      skills: 'C++, JavaScript',
      projects: '웹 애플리케이션 개발',
      performance: '보통',
      notes: '프론트엔드 기술 향상 중',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.comlee@example.comlee@example.comlee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
    {
      name: '이영희',
      email: 'lee@example.com',
      role: '사용자',
      department: '마케팅팀',
      position: '대리',
      joinDate: '2019-07-01',
      salary: '4,800,000원',
      phoneNumber: '010-3456-7890',
      address: '인천시 부평구',
      education: '대학교 졸업',
      skills: '디지털 마케팅, SNS 관리',
      projects: '브랜드 인지도 향상 캠페인',
      performance: '우수',
      notes: '창의적인 아이디어 제안',
    },
  ];
  return (
    <div className='flex'>
      <aside className='w-[200px] h-[calc(100vh-56px)] bg-background border-r'></aside>
      <div className='flex flex-col flex-1 w-[100px]'>
        {/* 이유는 모르겠지만, w고정 하면 원하는 대로 화면 채워줌 */}
        <div className='flex justify-end px-4 py-2 border-b h-14 gap-2'>
          <Button variant='outline' size='icon'>
            <RefreshCw className='h-5 w-5' />
            <span className='sr-only'>새로고침</span>
          </Button>
          <Button variant='outline' size='icon'>
            <Settings className='h-5 w-5' />
            <span className='sr-only'>{t('layout.settings')}</span>
          </Button>
          <Button variant='outline' size='icon'>
            <Shield className='h-5 w-5' />
            <span className='sr-only'>{t('layout.security')}</span>
          </Button>
        </div>
        <ScrollArea className='h-[calc(100vh-168px)]'>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.id} className='w-[150px] truncate'>
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      className='w-[150px] overflow-hidden whitespace-nowrap'
                    >
                      {typeof row[column.id as keyof typeof row] === 'string' &&
                      row[column.id as keyof typeof row].length > 15
                        ? `${row[column.id as keyof typeof row].substring(
                            0,
                            15
                          )}...`
                        : row[column.id as keyof typeof row]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <div className='h-14 flex justify-center items-center'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Database;
